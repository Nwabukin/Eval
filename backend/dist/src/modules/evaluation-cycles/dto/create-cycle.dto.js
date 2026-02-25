var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsDateString, IsOptional, IsString, IsUUID, MinLength } from "class-validator";
export class CreateCycleDto {
    name;
    startDate;
    endDate;
    calibrationMemberIds;
}
__decorate([
    ApiProperty({ description: "Cycle name", example: "Q1 2026 Review" }),
    IsString(),
    MinLength(1),
    __metadata("design:type", String)
], CreateCycleDto.prototype, "name", void 0);
__decorate([
    ApiProperty({ description: "Cycle start date", example: "2026-01-01" }),
    IsDateString(),
    __metadata("design:type", String)
], CreateCycleDto.prototype, "startDate", void 0);
__decorate([
    ApiProperty({ description: "Cycle end date", example: "2026-03-31" }),
    IsDateString(),
    __metadata("design:type", String)
], CreateCycleDto.prototype, "endDate", void 0);
__decorate([
    ApiPropertyOptional({
        description: "User IDs of calibration team members for this cycle",
        type: [String],
    }),
    IsOptional(),
    IsArray(),
    IsUUID("4", { each: true }),
    __metadata("design:type", Array)
], CreateCycleDto.prototype, "calibrationMemberIds", void 0);
//# sourceMappingURL=create-cycle.dto.js.map