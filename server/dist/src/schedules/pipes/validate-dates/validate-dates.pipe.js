"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateDatesPipe = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
let ValidateDatesPipe = class ValidateDatesPipe {
    transform(value, _metadata) {
        const { startDate, endDate } = value;
        if (startDate) {
            const startTime = new Date(startDate);
            if (isNaN(startTime.getTime())) {
                throw new common_2.BadRequestException('Invalid start time');
            }
        }
        if (endDate) {
            const endTime = new Date(endDate);
            if (isNaN(endTime.getTime())) {
                throw new common_2.BadRequestException('Invalid end time');
            }
        }
        const startTime = new Date(startDate);
        const endTime = new Date(endDate);
        if (startTime > endTime) {
            throw new common_2.BadRequestException('Start time must be before end time');
        }
        return value;
    }
};
exports.ValidateDatesPipe = ValidateDatesPipe;
exports.ValidateDatesPipe = ValidateDatesPipe = __decorate([
    (0, common_1.Injectable)()
], ValidateDatesPipe);
//# sourceMappingURL=validate-dates.pipe.js.map