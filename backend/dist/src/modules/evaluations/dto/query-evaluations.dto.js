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
import { IsEnum, IsInt, IsOptional, IsString, IsUUID, Max, Min } from "class-validator";
import { Type } from "class-transformer";
import { EvaluationStatus } from "../../../../generated/prisma/client.js";
export class QueryEvaluationsDto {
    cycleId;
    status;
    departmentId;
    search;
    page;
    limit;
}
__decorate([
    ApiPropertyOptional({ description: "Filter by evaluation cycle" }),
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], QueryEvaluationsDto.prototype, "cycleId", void 0);
__decorate([
    ApiPropertyOptional({ description: "Filter by status", enum: EvaluationStatus }),
    IsOptional(),
    IsEnum(EvaluationStatus),
    __metadata("design:type", String)
], QueryEvaluationsDto.prototype, "status", void 0);
__decorate([
    ApiPropertyOptional({ description: "Filter by department" }),
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], QueryEvaluationsDto.prototype, "departmentId", void 0);
__decorate([
    ApiPropertyOptional({ description: "Search employee name (case-insensitive)" }),
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], QueryEvaluationsDto.prototype, "search", void 0);
__decorate([
    ApiPropertyOptional({ description: "Page number", default: 1 }),
    IsOptional(),
    Type(() => Number),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], QueryEvaluationsDto.prototype, "page", void 0);
__decorate([
    ApiPropertyOptional({ description: "Items per page", default: 20 }),
    IsOptional(),
    Type(() => Number),
    IsInt(),
    Min(1),
    Max(100),
    __metadata("design:type", Number)
], QueryEvaluationsDto.prototype, "limit", void 0);
//# sourceMappingURL=query-evaluations.dto.js.map