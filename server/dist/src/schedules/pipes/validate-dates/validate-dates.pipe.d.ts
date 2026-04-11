import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class ValidateDatesPipe implements PipeTransform {
    transform(value: {
        startDate: string;
        endDate: string;
    }, _metadata: ArgumentMetadata): {
        startDate: string;
        endDate: string;
    };
}
