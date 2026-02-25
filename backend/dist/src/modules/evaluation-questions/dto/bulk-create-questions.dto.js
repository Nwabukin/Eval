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
import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsInt, IsOptional, IsString, IsUUID, Min, MinLength, ValidateNested } from "class-validator";
class BulkQuestionItem {
    text;
    category;
    weight;
    sortOrder;
}
__decorate([
    ApiProperty({ description: "Question text", example: "How well does the employee meet deadlines?" }),
    IsString(),
    MinLength(5),
    __metadata("design:type", String)
], BulkQuestionItem.prototype, "text", void 0);
__decorate([
    ApiPropertyOptional({ description: "Objective/section category grouping", example: "TEAMWORK" }),
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], BulkQuestionItem.prototype, "category", void 0);
__decorate([
    ApiPropertyOptional({ description: "Relative weight in the evaluation total", example: 10, default: 10 }),
    IsOptional(),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], BulkQuestionItem.prototype, "weight", void 0);
__decorate([
    ApiPropertyOptional({ description: "Display order within the form", example: 1, default: 0 }),
    IsOptional(),
    IsInt(),
    Min(0),
    __metadata("design:type", Number)
], BulkQuestionItem.prototype, "sortOrder", void 0);
export class BulkCreateQuestionsDto {
    sheetId;
    questions;
}
__decorate([
    ApiProperty({ description: "Evaluation sheet ID — all questions will belong to this sheet" }),
    IsUUID(),
    __metadata("design:type", String)
], BulkCreateQuestionsDto.prototype, "sheetId", void 0);
__decorate([
    ApiProperty({ description: "Array of questions to create", type: [BulkQuestionItem] }),
    IsArray(),
    ArrayMinSize(1),
    ValidateNested({ each: true }),
    Type(() => BulkQuestionItem),
    __metadata("design:type", Array)
], BulkCreateQuestionsDto.prototype, "questions", void 0);
//# sourceMappingURL=bulk-create-questions.dto.js.map