"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchedulesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_1 = require("../lib/prisma");
const client_1 = require("@prisma/client/runtime/client");
const enums_1 = require("../generated/prisma/enums");
let SchedulesService = class SchedulesService {
    async create(userCreatorId, userAsignedId, createScheduleDto) {
        try {
            const userCreator = await prisma_1.prisma.user.findUnique({
                where: {
                    id: userCreatorId,
                },
            });
            const userAsigned = await prisma_1.prisma.user.findUnique({
                where: {
                    id: userAsignedId,
                },
            });
            if (!userCreator || !userAsigned) {
                throw new common_1.NotFoundException('User not found');
            }
            if (userCreator.role !== enums_1.Role.CREATOR) {
                throw new common_1.BadRequestException('User creator is not a creator');
            }
            const schedule = await prisma_1.prisma.schedule.create({
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
                throw new common_1.BadRequestException('Schedule not created');
            }
            return {
                message: 'Schedule created successfully',
                status: 201,
            };
        }
        catch (err) {
            if (err instanceof client_1.PrismaClientKnownRequestError) {
                if (err.code === 'P2002') {
                    throw new common_1.ConflictException('Schedule already exists');
                }
            }
            if (err instanceof common_1.HttpException)
                throw err;
            throw new common_1.InternalServerErrorException('Failed to create schedule');
        }
    }
    async findAll() {
        try {
            const schedules = await prisma_1.prisma.schedule.findMany();
            if (!schedules) {
                throw new common_1.NotFoundException('Schedules not found');
            }
            const schedulesWithCreatorAndAssignee = await Promise.all(schedules.map(async (schedule) => {
                const creator = await prisma_1.prisma.user.findUnique({
                    where: {
                        id: schedule.idCreator,
                    },
                });
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
            }));
            if (!schedulesWithCreatorAndAssignee) {
                throw new common_1.ConflictException('Could not retrieve schedules');
            }
            return {
                message: 'Schedules retrieved successfully',
                schedules: schedulesWithCreatorAndAssignee,
            };
        }
        catch (err) {
            if (err instanceof common_1.HttpException)
                throw err;
            throw new common_1.InternalServerErrorException('Failed to find schedules');
        }
    }
    async findOne(id) {
        try {
            const schedule = await prisma_1.prisma.schedule.findUnique({
                where: {
                    id,
                },
            });
            if (!schedule) {
                throw new common_1.NotFoundException('Schedule not found');
            }
            const creator = await prisma_1.prisma.user.findUnique({
                where: {
                    id: schedule.idCreator,
                },
            });
            const assigned = await prisma_1.prisma.user.findUnique({
                where: {
                    id: schedule.idAsigned,
                },
            });
            if (!creator || !assigned) {
                throw new common_1.NotFoundException('Creator or assignee not found');
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
        }
        catch (err) {
            if (err instanceof common_1.HttpException)
                throw err;
            throw new common_1.InternalServerErrorException('Failed to find schedule');
        }
    }
    async update(id, userCreatorId, updateScheduleDto) {
        try {
            const userCreated = await prisma_1.prisma.user.findUnique({
                where: {
                    id: userCreatorId,
                },
            });
            if (!userCreated) {
                throw new common_1.NotFoundException('User not found');
            }
            if (userCreated.role !== enums_1.Role.CREATOR) {
                throw new common_1.BadRequestException('User creator is not a creator');
            }
            const schedule = await prisma_1.prisma.schedule.update({
                where: {
                    id,
                },
                data: updateScheduleDto,
            });
            if (!schedule) {
                throw new common_1.ConflictException('Schedule not updated');
            }
            return {
                message: 'Schedule updated successfully',
                status: 202,
            };
        }
        catch (err) {
            if (err instanceof common_1.HttpException)
                throw err;
            throw new common_1.InternalServerErrorException('Failed to update schedule');
        }
    }
    async remove(id, userCreatorId) {
        try {
            const userCreated = await prisma_1.prisma.user.findUnique({
                where: {
                    id: userCreatorId,
                },
            });
            if (!userCreated) {
                throw new common_1.NotFoundException('User not found');
            }
            if (userCreated.role !== enums_1.Role.CREATOR) {
                throw new common_1.BadRequestException('User creator is not a creator');
            }
            const schedule = await prisma_1.prisma.schedule.delete({
                where: {
                    id,
                },
            });
            if (!schedule) {
                throw new common_1.ConflictException('Schedule not deleted');
            }
            return {
                message: 'Schedule deleted successfully',
                status: 202,
            };
        }
        catch (err) {
            if (err instanceof common_1.HttpException)
                throw err;
            throw new common_1.InternalServerErrorException('Failed to delete schedule');
        }
    }
};
exports.SchedulesService = SchedulesService;
exports.SchedulesService = SchedulesService = __decorate([
    (0, common_1.Injectable)()
], SchedulesService);
//# sourceMappingURL=schedules.service.js.map