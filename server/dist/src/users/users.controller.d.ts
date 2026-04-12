import express from 'express';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import type { RequestWithUser } from './types/users-types';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    register(createUserDto: CreateUserDto, res: express.Response): Promise<{
        message: string;
        user: {
            id: string;
            email: string | null;
            fullName: string;
            role: import("../generated/prisma/enums").Role | null;
        };
    }>;
    login(loginUserDto: LoginUserDto, res: express.Response): Promise<{
        message: string;
    }>;
    findAll(): Promise<import("@nestjs/common").InternalServerErrorException | {
        message: string;
        users: (import("@nestjs/common").NotFoundException | {
            schedulesCreated: import("./types/users-types").ScheduleResponse[] | undefined;
            schedulesAssigned: {
                id: string;
                name: string | null;
                description: string | null;
                startDate: Date | null;
                endDate: Date | null;
                status: import("../generated/prisma/enums").ScheduleStatus | null;
                creator: {
                    id: string;
                    email: string | null;
                    fullName: string;
                    role: import("../generated/prisma/enums").Role | null;
                } | undefined;
            }[];
            id: string;
            email: string | null;
            fullName: string;
            role: import("../generated/prisma/enums").Role | null;
        } | {
            schedulesAssigned: {
                id: string;
                name: string | null;
                description: string | null;
                startDate: Date | null;
                endDate: Date | null;
                status: import("../generated/prisma/enums").ScheduleStatus | null;
                creator: {
                    id: string;
                    email: string | null;
                    fullName: string;
                    role: import("../generated/prisma/enums").Role | null;
                } | undefined;
            }[];
            schedulesCreated?: undefined;
            id: string;
            email: string | null;
            fullName: string;
            role: import("../generated/prisma/enums").Role | null;
        })[];
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("@nestjs/common").InternalServerErrorException | {
        message: string;
        user: {
            id: string;
            name: string | null;
            apellido: string | null;
            role: import("../generated/prisma/enums").Role | null;
            email: string | null;
            password: string | null;
        };
    }>;
    getMe(req: RequestWithUser): Promise<{
        message: string;
        user: {
            schedulesCreated: import("./types/users-types").ScheduleResponse[];
            schedulesAssigned: import("./types/users-types").ScheduleResponse[];
            id: string;
            email: string | null;
            fullName: string;
            role: import("../generated/prisma/enums").Role | null;
        } | {
            schedulesAssigned: import("./types/users-types").ScheduleResponse[];
            schedulesCreated?: undefined;
            id: string;
            email: string | null;
            fullName: string;
            role: import("../generated/prisma/enums").Role | null;
        };
    }>;
    logout(res: express.Response): {
        message: string;
    };
    remove(id: string): Promise<import("@nestjs/common").InternalServerErrorException | {
        message: string;
        user: {
            id: string;
            name: string | null;
            apellido: string | null;
            role: import("../generated/prisma/enums").Role | null;
            email: string | null;
            password: string | null;
        };
    }>;
}
