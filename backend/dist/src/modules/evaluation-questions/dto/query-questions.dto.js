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
import { IsOptional, IsString, IsUUID } from "class-validator";
export class QueryQuestionsDto {
    search;
    sheetId;
    cycleId;
    departmentId;
    levelId;
}
__decorate([
    ApiPropertyOptional({ description: "Search question text (case-insensitive)" }),
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], QueryQuestionsDto.prototype, "search", void 0);
__decorate([
    ApiPropertyOptional({ description: "Filter by sheet" }),
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], QueryQuestionsDto.prototype, "sheetId", void 0);
__decorate([
    ApiPropertyOptional({ description: "Filter by cycle (via sheet relation)" }),
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], QueryQuestionsDto.prototype, "cycleId", void 0);
__decorate([
    ApiPropertyOptional({ description: "Filter by department (via sheet relation)" }),
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], QueryQuestionsDto.prototype, "departmentId", void 0);
__decorate([
    ApiPropertyOptional({ description: "Filter by level (via sheet relation)" }),
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], QueryQuestionsDto.prototype, "levelId", void 0);
//# sourceMappingURL=query-questions.dto.js.map