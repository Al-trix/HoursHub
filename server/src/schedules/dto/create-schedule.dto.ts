import { IsNotEmpty, IsString, IsEnum } from 'class-validator';
import { ScheduleStatus } from 'src/generated/prisma/enums';
export class CreateScheduleDto {
  @IsString({ message: 'Name must be a string' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsString({ message: 'Description must be a string' })
  @IsNotEmpty({ message: 'Description is required' })
  description: string;

  @IsString({ message: 'Start time must be a string' })
  @IsNotEmpty({ message: 'Start time is required' })
  startDate: string;

  @IsString({ message: 'End time must be a string' })
  @IsNotEmpty({ message: 'End time is required' })
  endDate: string;

  @IsEnum(ScheduleStatus, { message: 'Status must be valid' })
  @IsNotEmpty({ message: 'Status is required' })
  status: ScheduleStatus;
}
