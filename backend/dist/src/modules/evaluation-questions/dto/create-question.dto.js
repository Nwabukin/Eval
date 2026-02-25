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
import { IsInt, IsOptional, IsString, IsUUID, Min, MinLength } from "class-validator";
export class CreateQuestionDto {
    text;
    category;
    weight;
    sortOrder;
    sheetId;
}
__decorate([
    ApiProperty({ description: "Question text", example: "How well does the employee meet deadlines?" }),
    IsString(),
    MinLength(5),
    __metadata("design:type", String)
], CreateQuestionDto.prototype, "text", void 0);
__decorate([
    ApiPropertyOptional({ description: "Objective/section category grouping", example: "TEAMWORK" }),
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateQuestionDto.prototype, "category", void 0);
__decorate([
    ApiPropertyOptional({ description: "Relative weight in the evaluation total", example: 10, default: 10 }),
    IsOptional(),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], CreateQuestionDto.prototype, "weight", void 0);
__decorate([
    ApiPropertyOptional({ description: "Display order within the form", example: 1, default: 0 }),
    IsOptional(),
    IsInt(),
    Min(0),
    __metadata("design:type", Number)
], CreateQuestionDto.prototype, "sortOrder", void 0);
__decorate([
    ApiProperty({ description: "Evaluation sheet ID this question belongs to" }),
    IsUUID(),
    __metadata("design:type", String)
], CreateQuestionDto.prototype, "sheetId", void 0);
//# sourceMappingURL=create-question.dto.js.map