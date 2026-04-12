"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const prisma_1 = require("../lib/prisma");
const uuid_1 = require("uuid");
const bcryptjs_1 = require("bcryptjs");
const enums_1 = require("../generated/prisma/enums");
let UsersService = class UsersService {
    jwtService;
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async verifyToken(token) {
        try {
            return await this.jwtService.verifyAsync(token);
        }
        catch (err) {
            console.log(err);
            throw new common_1.UnauthorizedException('Token inválido o expirado');
        }
    }
    async register(createUserDto) {
        try {
            const id = (0, uuid_1.v4)();
            const hashedPassword = await (0, bcryptjs_1.hash)(createUserDto.password, 10);
            const UserExisted = await prisma_1.prisma.user.findUnique({
                where: {
                    email: createUserDto.email,
                },
            });
            if (UserExisted) {
                throw new common_1.ConflictException('User already exists');
            }
            const User = await prisma_1.prisma.user.create({
                data: {
                    ...createUserDto,
                    id,
                    password: hashedPassword,
                },
            });
            if (!User) {
                throw new common_1.ConflictException('User could not be created');
            }
            const payload = {
                id: User.id,
                role: User.role,
            };
            const token = await this.jwtService.signAsync(payload);
            return {
                message: 'User created successfully',
                user: {
                    id: User.id,
                    email: User.email,
                    fullName: User.name + ' ' + User.apellido,
                    role: User.role,
                },
                token,
            };
        }
        catch (err) {
            if (err instanceof common_1.HttpException)
                throw err;
            console.log(err);
            throw new common_1.InternalServerErrorException('Server error');
        }
    }
    async login(loginUserDto) {
        try {
            const user = await prisma_1.prisma.user.findUnique({
                where: {
                    email: loginUserDto.email,
                },
            });
            if (!user || !user.password) {
                throw new common_1.NotFoundException('User not found');
            }
            const isPasswordValid = await (0, bcryptjs_1.compare)(loginUserDto.password, user.password);
            if (!isPasswordValid) {
                throw new common_1.UnauthorizedException('Incorrect password');
            }
            let schedulesCreatedByAdmin = [];
            let schedulesAssignedToUser = [];
            if (user.role === enums_1.Role.CREATOR) {
                const schedules = await prisma_1.prisma.schedule.findMany({
                    where: {
                        idCreator: user.id,
                    },
                });
                schedulesCreatedByAdmin = await Promise.all(schedules.map(async (schedule) => {
                    const assigned = await prisma_1.prisma.user.findUnique({
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
                }));
            }
            if (user.role === enums_1.Role.USER || user.role === enums_1.Role.CREATOR) {
                const schedules = await prisma_1.prisma.schedule.findMany({
                    where: {
                        idAsigned: user.id,
                    },
                });
                schedulesAssignedToUser = await Promise.all(schedules.map(async (schedule) => {
                    const creator = await prisma_1.prisma.user.findUnique({
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
                }));
            }
            const schemaSchedules = user.role === enums_1.Role.CREATOR
                ? {
                    schedulesCreated: schedulesCreatedByAdmin,
                    schedulesAssigned: schedulesAssignedToUser,
                }
                : {
                    schedulesAssigned: schedulesAssignedToUser,
                };
            const payload = {
                id: user.id,
                role: user.role,
            };
            const token = await this.jwtService.signAsync(payload);
            return {
                message: 'User logged in successfully',
                user: {
                    id: user.id,
                    email: user.email,
                    fullName: user.name + ' ' + user.apellido,
                    role: user.role,
                    ...schemaSchedules,
                },
                token,
            };
        }
        catch (err) {
            if (err instanceof common_1.HttpException)
                throw err;
            console.log(err);
            throw new common_1.InternalServerErrorException('Server error');
        }
    }
    async getMe(id) {
        try {
            const user = await prisma_1.prisma.user.findUnique({
                where: {
                    id,
                },
            });
            if (!user) {
                throw new common_1.NotFoundException('User not found');
            }
            let schedulesCreatedByAdmin = [];
            let schedulesAssignedToUser = [];
            if (user.role === enums_1.Role.CREATOR) {
                const schedules = await prisma_1.prisma.schedule.findMany({
                    where: {
                        idCreator: user.id,
                    },
                });
                schedulesCreatedByAdmin = await Promise.all(schedules.map(async (schedule) => {
                    const assigned = await prisma_1.prisma.user.findUnique({
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
                }));
            }
            if (user.role === enums_1.Role.USER || user.role === enums_1.Role.CREATOR) {
                const schedules = await prisma_1.prisma.schedule.findMany({
                    where: {
                        idAsigned: user.id,
                    },
                });
                schedulesAssignedToUser = await Promise.all(schedules.map(async (schedule) => {
                    const creator = await prisma_1.prisma.user.findUnique({
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
                }));
            }
            const schemaSchedules = user.role === enums_1.Role.CREATOR
                ? {
                    schedulesCreated: schedulesCreatedByAdmin,
                    schedulesAssigned: schedulesAssignedToUser,
                }
                : {
                    schedulesAssigned: schedulesAssignedToUser,
                };
            return {
                message: 'User verify  successfully',
                user: {
                    id: user.id,
                    email: user.email,
                    fullName: user.name + ' ' + user.apellido,
                    role: user.role,
                    ...schemaSchedules,
                },
            };
        }
        catch (err) {
            if (err instanceof common_1.HttpException)
                throw err;
            console.log(err);
            throw new common_1.InternalServerErrorException('Server error');
        }
    }
    async findAll() {
        try {
            const users = await prisma_1.prisma.user.findMany();
            if (!users) {
                throw new common_1.ConflictException('Could not retrieve users');
            }
            if (users.length === 0) {
                throw new common_1.NotFoundException('No users found');
            }
            const usersSchema = await Promise.all(users.map(async (user) => {
                let schedulesCreator;
                if (user.role === enums_1.Role.CREATOR) {
                    const schedules = await prisma_1.prisma.schedule.findMany({
                        where: {
                            idCreator: user.id,
                        },
                    });
                    if (!schedules) {
                        return new common_1.NotFoundException('No schedules found');
                    }
                    schedulesCreator = await Promise.all(schedules.map(async (schedule) => {
                        const assigned = await prisma_1.prisma.user.findUnique({
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
                    }));
                }
                const schedules = await prisma_1.prisma.schedule.findMany({
                    where: {
                        idAsigned: user.id,
                    },
                });
                const schedulesAssigned = await Promise.all(schedules.map(async (schedule) => {
                    const creator = await prisma_1.prisma.user.findUnique({
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
                }));
                const schedulesFormat = user.role === enums_1.Role.CREATOR
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
            }));
            return {
                message: 'Users retrieved successfully',
                users: usersSchema,
            };
        }
        catch (err) {
            console.log(err);
            return new common_1.InternalServerErrorException('Server error');
        }
    }
    async update(id, updateUserDto) {
        try {
            const userExists = await prisma_1.prisma.user.findUnique({
                where: {
                    id,
                },
            });
            if (!userExists) {
                throw new common_1.NotFoundException('User not found');
            }
            const user = await prisma_1.prisma.user.update({
                where: {
                    id,
                },
                data: updateUserDto,
            });
            if (!user) {
                throw new common_1.ConflictException('User could not be updated');
            }
            return {
                message: 'User updated successfully',
                user,
            };
        }
        catch (err) {
            console.log(err);
            return new common_1.InternalServerErrorException('Server error');
        }
    }
    async remove(id) {
        try {
            const user = await prisma_1.prisma.user.delete({
                where: {
                    id,
                },
            });
            if (!user) {
                throw new common_1.ConflictException('User could not be deleted');
            }
            return {
                message: 'User deleted successfully',
                user,
            };
        }
        catch (err) {
            console.log(err);
            return new common_1.InternalServerErrorException('Server error');
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map