import { ScheduleStatus } from "../../generated/prisma/enums";
export declare class CreateScheduleDto {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    status: ScheduleStatus;
}
