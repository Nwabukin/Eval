var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEnum, IsInt, IsUUID, Min, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CalibrationMode } from "../../../../generated/prisma/client.js";
export class SetCalibrationModeDto {
    mode;
}
__decorate([
    ApiProperty({ description: "Calibration scoring mode", enum: CalibrationMode }),
    IsEnum(CalibrationMode),
    __metadata("design:type", String)
], SetCalibrationModeDto.prototype, "mode", void 0);
export class DirectFinalScoreItemDto {
    questionId;
    finalScore;
}
__decorate([
    ApiProperty({ description: "Question ID" }),
    IsUUID(),
    __metadata("design:type", String)
], DirectFinalScoreItemDto.prototype, "questionId", void 0);
__decorate([
    ApiProperty({ description: "Final calibrated score (validated against sheet's score range)", minimum: 1 }),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], DirectFinalScoreItemDto.prototype, "finalScore", void 0);
export class SaveDirectCalibrationDto {
    answers;
}
__decorate([
    ApiProperty({ type: [DirectFinalScoreItemDto] }),
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => DirectFinalScoreItemDto),
    __metadata("design:type", Array)
], SaveDirectCalibrationDto.prototype, "answers", void 0);
export class IndividualScoreItemDto {
    questionId;
    score;
}
__decorate([
    ApiProperty({ description: "Question ID" }),
    IsUUID(),
    __metadata("design:type", String)
], IndividualScoreItemDto.prototype, "questionId", void 0);
__decorate([
    ApiProperty({ description: "Individual calibrator score (validated against sheet's score range)", minimum: 1 }),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], IndividualScoreItemDto.prototype, "score", void 0);
export class SaveIndividualCalibrationDto {
    answers;
}
__decorate([
    ApiProperty({ type: [IndividualScoreItemDto] }),
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => IndividualScoreItemDto),
    __metadata("design:type", Array)
], SaveIndividualCalibrationDto.prototype, "answers", void 0);
//# sourceMappingURL=calibration.dto.js.map