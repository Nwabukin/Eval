var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsDateString, IsOptional, IsString, IsUUID, MinLength } from "class-validator";
export class UpdateCycleDto {
    name;
    startDate;
    endDate;
    calibrationMemberIds;
}
__decorate([
    ApiPropertyOptional({ description: "Cycle name" }),
    IsOptional(),
    IsString(),
    MinLength(1),
    __metadata("design:type", String)
], UpdateCycleDto.prototype, "name", void 0);
__decorate([
    ApiPropertyOptional({ description: "Start date" }),
    IsOptional(),
    IsDateString(),
    __metadata("design:type", String)
], UpdateCycleDto.prototype, "startDate", void 0);
__decorate([
    ApiPropertyOptional({ description: "End date" }),
    IsOptional(),
    IsDateString(),
    __metadata("design:type", String)
], UpdateCycleDto.prototype, "endDate", void 0);
__decorate([
    ApiPropertyOptional({
        description: "Replace calibration team members — full list of user IDs",
        type: [String],
    }),
    IsOptional(),
    IsArray(),
    IsUUID("4", { each: true }),
    __metadata("design:type", Array)
], UpdateCycleDto.prototype, "calibrationMemberIds", void 0);
//# sourceMappingURL=update-cycle.dto.js.map