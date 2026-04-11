import { NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { Role } from "../generated/prisma/enums";
import { ScheduleResponse } from './types/users-types';
export declare class UsersService {
    register(createUserDto: CreateUserDto): Promise<{
        message: string;
        user: {
            id: string;
            email: string | null;
            fullName: string;
            role: Role | null;
        };
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        message: string;
        user: {
            schedulesCreated: ScheduleResponse[];
            schedulesAssigned: ScheduleResponse[];
            id: string;
            email: string | null;
            fullName: string;
            role: Role | null;
        } | {
            schedulesAssigned: ScheduleResponse[];
            schedulesCreated?: undefined;
            id: string;
            email: string | null;
            fullName: string;
            role: Role | null;
        };
    }>;
    findAll(): Promise<InternalServerErrorException | {
        message: string;
        users: (NotFoundException | {
            schedulesCreated: ScheduleResponse[] | undefined;
            schedulesAssigned: {
                id: string;
                name: string | null;
                description: string | null;
                startDate: Date | null;
                endDate: Date | null;
                status: import("src/generated/prisma/enums").ScheduleStatus | null;
                creator: {
                    id: string;
                    email: string | null;
                    fullName: string;
                    role: Role | null;
                } | undefined;
            }[];
            id: string;
            email: string | null;
            fullName: string;
            role: Role | null;
        } | {
            schedulesAssigned: {
                id: string;
                name: string | null;
                description: string | null;
                startDate: Date | null;
                endDate: Date | null;
                status: import("src/generated/prisma/enums").ScheduleStatus | null;
                creator: {
                    id: string;
                    email: string | null;
                    fullName: string;
                    role: Role | null;
                } | undefined;
            }[];
            schedulesCreated?: undefined;
            id: string;
            email: string | null;
            fullName: string;
            role: Role | null;
        })[];
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<InternalServerErrorException | {
        message: string;
        user: {
            id: string;
            email: string | null;
            name: string | null;
            apellido: string | null;
            role: Role | null;
            password: string | null;
        };
    }>;
    remove(id: string): Promise<InternalServerErrorException | {
        message: string;
        user: {
            id: string;
            email: string | null;
            name: string | null;
            apellido: string | null;
            role: Role | null;
            password: string | null;
        };
    }>;
}
