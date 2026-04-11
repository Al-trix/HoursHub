import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class ValidateDatesPipe implements PipeTransform {
  transform(
    value: { startDate: string; endDate: string },
    _metadata: ArgumentMetadata,
  ) {
    const { startDate, endDate } = value;

    if (startDate) {
      const startTime = new Date(startDate);
      if (isNaN(startTime.getTime())) {
        throw new BadRequestException('Invalid start time');
      }
    }

    if (endDate) {
      const endTime = new Date(endDate);
      if (isNaN(endTime.getTime())) {
        throw new BadRequestException('Invalid end time');
      }
    }

    const startTime = new Date(startDate);
    const endTime = new Date(endDate);

    if (startTime > endTime) {
      throw new BadRequestException('Start time must be before end time');
    }

    return value;
  }
}
