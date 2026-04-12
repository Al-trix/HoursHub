import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
  HttpException,
  ConflictException,
} from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { prisma } from '../lib/prisma';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';
import { Role } from 'src/generated/prisma/enums';

@Injectable()
export class SchedulesService {
  async create(
    userCreatorId: string,
    userAsignedId: string,
    createScheduleDto: CreateScheduleDto,
  ) {
    try {
      const userCreator = await prisma.user.findUnique({
        where: {
          id: userCreatorId,
        },
      });

      const userAsigned = await prisma.user.findUnique({
        where: {
          id: userAsignedId,
        },
      });

      if (!userCreator || !userAsigned) {
        throw new NotFoundException('User not found');
      }

      if (userCreator.role !== Role.CREATOR) {
        throw new BadRequestException('User creator is not a creator');
      }

      const schedule = await prisma.schedule.create({
        data: {
          ...createScheduleDto,
          startDate: new Date(createScheduleDto.startDate),
          endDate: new Date(createScheduleDto.endDate),
          creator: {
            connect: {
              id: userCreatorId,
            },
          },
          assigned: {
            connect: {
              id: userAsignedId,
            },
          },
        },
      });

      if (!schedule) {
        throw new BadRequestException('Schedule not created');
      }

      return {
        message: 'Schedule created successfully',
        status: 201,
      };
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
          throw new ConflictException('Schedule already exists');
        }
      }
      if (err instanceof HttpException) throw err;

      throw new InternalServerErrorException('Failed to create schedule');
    }
  }

  async findAll() {
    try {
      const schedules = await prisma.schedule.findMany();

      if (!schedules) {
        throw new NotFoundException('Schedules not found');
      }

      const schedulesWithCreatorAndAssignee = await Promise.all(
        schedules.map(async (schedule) => {
          const creator = await prisma.user.findUnique({
            where: {
              id: schedule.idCreator,
            },
          });
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
            creator: {
              id: creator?.id,
              email: creator?.email,
              fullName: creator?.email + ' ' + creator?.apellido,
              role: creator?.role,
            },
            assigned: {
              id: assigned?.id,
              email: assigned?.email,
              fullName: assigned?.email + ' ' + assigned?.apellido,
              role: assigned?.role,
            },
          };
        }),
      );

      if (!schedulesWithCreatorAndAssignee) {
        throw new ConflictException('Could not retrieve schedules');
      }

      return {
        message: 'Schedules retrieved successfully',
        schedules: schedulesWithCreatorAndAssignee,
      };
    } catch (err) {
      if (err instanceof HttpException) throw err;
      throw new InternalServerErrorException('Failed to find schedules');
    }
  }

  async findOne(id: string) {
    try {
      const schedule = await prisma.schedule.findUnique({
        where: {
          id,
        },
      });

      if (!schedule) {
        throw new NotFoundException('Schedule not found');
      }

      const creator = await prisma.user.findUnique({
        where: {
          id: schedule.idCreator,
        },
      });

      const assigned = await prisma.user.findUnique({
        where: {
          id: schedule.idAsigned,
        },
      });

      if (!creator || !assigned) {
        throw new NotFoundException('Creator or assignee not found');
      }

      return {
        message: 'Schedule retrieved successfully',
        schedule: {
          id: schedule.id,
          name: schedule.name,
          description: schedule.description,
          startDate: schedule.startDate,
          endDate: schedule.endDate,
          status: schedule.status,
          creator: {
            id: creator.id,
            email: creator.email,
            fullName: creator.email + ' ' + creator.apellido,
            role: creator.role,
          },
          assigned: {
            id: assigned.id,
            email: assigned.email,
            fullName: assigned.email + ' ' + assigned.apellido,
            role: assigned.role,
          },
        },
      };
    } catch (err) {
      if (err instanceof HttpException) throw err;
      throw new InternalServerErrorException('Failed to find schedule');
    }
  }

  async update(
    id: string,
    userCreatorId: string,
    updateScheduleDto: UpdateScheduleDto,
  ) {
    try {
      const userCreated = await prisma.user.findUnique({
        where: {
          id: userCreatorId,
        },
      });

      if (!userCreated) {
        throw new NotFoundException('User not found');
      }

      if (userCreated.role !== Role.CREATOR) {
        throw new BadRequestException('User creator is not a creator');
      }

      const schedule = await prisma.schedule.update({
        where: {
          id,
        },
        data: updateScheduleDto,
      });

      if (!schedule) {
        throw new ConflictException('Schedule not updated');
      }

      return {
        message: 'Schedule updated successfully',
        status: 202,
      };
    } catch (err) {
      if (err instanceof HttpException) throw err;
      throw new InternalServerErrorException('Failed to update schedule');
    }
  }

  async remove(id: string, userCreatorId: string) {
    try {
      const userCreated = await prisma.user.findUnique({
        where: {
          id: userCreatorId,
        },
      });

      if (!userCreated) {
        throw new NotFoundException('User not found');
      }

      if (userCreated.role !== Role.CREATOR) {
        throw new BadRequestException('User creator is not a creator');
      }

      const schedule = await prisma.schedule.delete({
        where: {
          id,
        },
      });

      if (!schedule) {
        throw new ConflictException('Schedule not deleted');
      }

      return {
        message: 'Schedule deleted successfully',
        status: 202,
      };
    } catch (err) {
      if (err instanceof HttpException) throw err;
      throw new InternalServerErrorException('Failed to delete schedule');
    }
  }
}
