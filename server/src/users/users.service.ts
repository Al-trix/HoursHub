import {
  ConflictException,
  NotFoundException,
  UnauthorizedException,
  HttpException,
  InternalServerErrorException,
  Injectable,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { prisma } from 'src/lib/prisma';
import { v4 as uuidv4 } from 'uuid';
import { hash, compare } from 'bcryptjs';
import { Role } from 'src/generated/prisma/enums';
import { ScheduleResponse } from './types/users-types';

@Injectable()
export class UsersService {
  async register(createUserDto: CreateUserDto) {
    try {
      const id = uuidv4();
      const hashedPassword = await hash(createUserDto.password, 10);

      const UserExisted = await prisma.user.findUnique({
        where: {
          email: createUserDto.email,
        },
      });

      if (UserExisted) {
        throw new ConflictException('User already exists');
      }

      const User = await prisma.user.create({
        data: {
          ...createUserDto,
          id,
          password: hashedPassword,
        },
      });

      if (!User) {
        throw new ConflictException('User could not be created');
      }

      return {
        message: 'User created successfully',
        user: {
          id: User.id,
          email: User.email,
          fullName: User.name + ' ' + User.apellido,
          role: User.role,
        },
      };
    } catch (err) {
      if (err instanceof HttpException) throw err;
      console.log(err);
      throw new InternalServerErrorException('Server error');
    }
  }

  async login(loginUserDto: LoginUserDto) {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: loginUserDto.email,
        },
      });

      if (!user || !user.password) {
        throw new NotFoundException('User not found');
      }

      const isPasswordValid = await compare(
        loginUserDto.password,
        user.password,
      );

      if (!isPasswordValid) {
        throw new UnauthorizedException('Incorrect password');
      }

      let schedulesCreatedByAdmin: ScheduleResponse[] = [];
      let schedulesAssignedToUser: ScheduleResponse[] = [];

      if (user.role === Role.CREATOR) {
        const schedules = await prisma.schedule.findMany({
          where: {
            idCreator: user.id,
          },
        });

        schedulesCreatedByAdmin = await Promise.all(
          schedules.map(async (schedule) => {
            const assigned = await prisma.user.findUnique({
              where: {
                id: schedule.idAsigned,
              },
            });

            return {
              id: schedule.id,
              name: schedule.name,
              description: schedule.description,
              startDate: schedule.startDate,
              endDate: schedule.endDate,
              status: schedule.status,
              assigned: assigned
                ? {
                    id: assigned.id,
                    email: assigned.email,
                    fullName: assigned.name + ' ' + assigned.apellido,
                    role: assigned.role,
                  }
                : undefined,
            };
          }),
        );
      }

      if (user.role === Role.USER || user.role === Role.CREATOR) {
        const schedules = await prisma.schedule.findMany({
          where: {
            idAsigned: user.id,
          },
        });

        schedulesAssignedToUser = await Promise.all(
          schedules.map(async (schedule) => {
            const creator = await prisma.user.findUnique({
              where: {
                id: schedule.idCreator,
              },
            });

            return {
              id: schedule.id,
              name: schedule.name,
              description: schedule.description,
              startDate: schedule.startDate,
              endDate: schedule.endDate,
              status: schedule.status,
              creator: creator
                ? {
                    id: creator.id,
                    email: creator.email,
                    fullName: creator.name + ' ' + creator.apellido,
                    role: creator.role,
                  }
                : undefined,
            };
          }),
        );
      }

      const schemaSchedules =
        user.role === Role.CREATOR
          ? {
              schedulesCreated: schedulesCreatedByAdmin,
              schedulesAssigned: schedulesAssignedToUser,
            }
          : {
              schedulesAssigned: schedulesAssignedToUser,
            };

      return {
        message: 'User logged in successfully',
        user: {
          id: user.id,
          email: user.email,
          fullName: user.name + ' ' + user.apellido,
          role: user.role,
          ...schemaSchedules,
        },
      };
    } catch (err) {
      if (err instanceof HttpException) throw err;
      console.log(err);
      throw new InternalServerErrorException('Server error');
    }
  }

  async findAll() {
    try {
      const users = await prisma.user.findMany();

      if (!users) {
        throw new ConflictException('Could not retrieve users');
      }

      if (users.length === 0) {
        throw new NotFoundException('No users found');
      }

      const usersSchema = await Promise.all(
        users.map(async (user) => {
          let schedulesCreator: ScheduleResponse[] | undefined;
          if (user.role === Role.CREATOR) {
            const schedules = await prisma.schedule.findMany({
              where: {
                idCreator: user.id,
              },
            });

            if (!schedules) {
              return new NotFoundException('No schedules found');
            }

            schedulesCreator = await Promise.all(
              schedules.map(async (schedule) => {
                const assigned = await prisma.user.findUnique({
                  where: {
                    id: schedule.idAsigned,
                  },
                });

                return {
                  id: schedule.id,
                  name: schedule.name,
                  description: schedule.description,
                  startDate: schedule.startDate,
                  endDate: schedule.endDate,
                  status: schedule.status,
                  assigned: assigned
                    ? {
                        id: assigned.id,
                        email: assigned.email,
                        fullName: assigned.name + ' ' + assigned.apellido,
                        role: assigned.role,
                      }
                    : undefined,
                };
              }),
            );
          }
          const schedules = await prisma.schedule.findMany({
            where: {
              idAsigned: user.id,
            },
          });

          const schedulesAssigned = await Promise.all(
            schedules.map(async (schedule) => {
              const creator = await prisma.user.findUnique({
                where: {
                  id: schedule.idCreator,
                },
              });

              return {
                id: schedule.id,
                name: schedule.name,
                description: schedule.description,
                startDate: schedule.startDate,
                endDate: schedule.endDate,
                status: schedule.status,
                creator: creator
                  ? {
                      id: creator.id,
                      email: creator.email,
                      fullName: creator.name + ' ' + creator.apellido,
                      role: creator.role,
                    }
                  : undefined,
              };
            }),
          );

          const schedulesFormat =
            user.role === Role.CREATOR
              ? {
                  schedulesCreated: schedulesCreator,
                  schedulesAssigned: schedulesAssigned,
                }
              : {
                  schedulesAssigned: schedulesAssigned,
                };

          return {
            id: user.id,
            email: user.email,
            fullName: user.name + ' ' + user.apellido,
            role: user.role,
            ...schedulesFormat,
          };
        }),
      );

      return {
        message: 'Users retrieved successfully',
        users: usersSchema,
      };
    } catch (err) {
      console.log(err);
      return new InternalServerErrorException('Server error');
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    try {
      const userExists = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!userExists) {
        throw new NotFoundException('User not found');
      }

      const user = await prisma.user.update({
        where: {
          id,
        },
        data: updateUserDto,
      });

      if (!user) {
        throw new ConflictException('User could not be updated');
      }

      return {
        message: 'User updated successfully',
        user,
      };
    } catch (err) {
      console.log(err);
      return new InternalServerErrorException('Server error');
    }
  }

  async remove(id: string) {
    try {
      const user = await prisma.user.delete({
        where: {
          id,
        },
      });

      if (!user) {
        throw new ConflictException('User could not be deleted');
      }

      return {
        message: 'User deleted successfully',
        user,
      };
    } catch (err) {
      console.log(err);
      return new InternalServerErrorException('Server error');
    }
  }
}
