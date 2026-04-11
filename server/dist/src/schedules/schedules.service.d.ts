import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Role } from "../generated/prisma/enums";
export declare class SchedulesService {
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
            status: import("src/generated/prisma/enums").ScheduleStatus | null;
            creator: {
                id: string | undefined;
                email: string | null | undefined;
                fullName: string;
                role: Role | null | undefined;
            };
            assigned: {
                id: string | undefined;
                email: string | null | undefined;
                fullName: string;
                role: Role | null | undefined;
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
            status: import("src/generated/prisma/enums").ScheduleStatus | null;
            creator: {
                id: string;
                email: string | null;
                fullName: string;
                role: Role | null;
            };
            assigned: {
                id: string;
                email: string | null;
                fullName: string;
                role: Role | null;
            };
        };
    }>;
    update(id: string, updateScheduleDto: UpdateScheduleDto): Promise<{
        message: string;
        status: number;
    }>;
    remove(id: string): Promise<{
        message: string;
        status: number;
    }>;
}
