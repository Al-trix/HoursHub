import { SchedulesService } from './schedules.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
export declare class SchedulesController {
    private readonly schedulesService;
    constructor(schedulesService: SchedulesService);
    create(userCreatorId: string, userAsignedId: string, createScheduleDto: CreateScheduleDto): Promise<{
        message: string;
        status: number;
    }>;
    findAll(): Promise<{
        message: string;
        schedules: {
            id: string;
            name: string | null;
            description: string | null;
            startDate: Date | null;
            endDate: Date | null;
            status: import("../generated/prisma/enums").ScheduleStatus | null;
            creator: {
                id: string | undefined;
                email: string | null | undefined;
                fullName: string;
                role: import("../generated/prisma/enums").Role | null | undefined;
            };
            assigned: {
                id: string | undefined;
                email: string | null | undefined;
                fullName: string;
                role: import("../generated/prisma/enums").Role | null | undefined;
            };
        }[];
    }>;
    findOne(id: string): Promise<{
        message: string;
        schedule: {
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
            };
            assigned: {
                id: string;
                email: string | null;
                fullName: string;
                role: import("../generated/prisma/enums").Role | null;
            };
        };
    }>;
    update(id: string, userCreatorId: string, updateScheduleDto: UpdateScheduleDto): Promise<{
        message: string;
        status: number;
    }>;
    remove(id: string, userCreatorId: string): Promise<{
        message: string;
        status: number;
    }>;
}
