import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ValidateDatesPipe } from './pipes/validate-dates/validate-dates.pipe';

@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}

  @Post('create/:userCreatorId/:userAsignedId')
  create(
    @Param('userCreatorId') userCreatorId: string,
    @Param('userAsignedId') userAsignedId: string,
    @Body(ValidateDatesPipe) createScheduleDto: CreateScheduleDto,
  ) {
    return this.schedulesService.create(
      userCreatorId,
      userAsignedId,
      createScheduleDto,
    );
  }

  @Get('all')
  findAll() {
    return this.schedulesService.findAll();
  }

  @Get('one/:id')
  findOne(@Param('id') id: string) {
    return this.schedulesService.findOne(id);
  }

  @Patch('update/:id/:userCreatorId')
  update(
    @Param('id') id: string,
    @Param('userCreatorId') userCreatorId: string,
    @Body() updateScheduleDto: UpdateScheduleDto,
  ) {
    return this.schedulesService.update(id, userCreatorId, updateScheduleDto);
  }

  @Delete('delete/:id/:userCreatorId')
  remove(
    @Param('id') id: string,
    @Param('userCreatorId') userCreatorId: string,
  ) {
    return this.schedulesService.remove(id, userCreatorId);
  }
}
