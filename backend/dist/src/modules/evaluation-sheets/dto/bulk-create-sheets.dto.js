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
class BulkSheetItem {
    name;
    weight;
    minScore;
    maxScore;
    sortOrder;
    departmentId;
    levelId;
}
__decorate([
    ApiProperty({ description: "Sheet/section name", example: "GENERAL" }),
    IsString(),
    MinLength(1),
    __metadata("design:type", String)
], BulkSheetItem.prototype, "name", void 0);
__decorate([
    ApiPropertyOptional({ description: "Sheet weight", example: 100, default: 100 }),
    IsOptional(),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], BulkSheetItem.prototype, "weight", void 0);
__decorate([
    ApiPropertyOptional({ description: "Minimum allowed score", example: 1, default: 1 }),
    IsOptional(),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], BulkSheetItem.prototype, "minScore", void 0);
__decorate([
    ApiPropertyOptional({ description: "Maximum allowed score", example: 10, default: 10 }),
    IsOptional(),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], BulkSheetItem.prototype, "maxScore", void 0);
__decorate([
    ApiPropertyOptional({ description: "Display order", example: 0, default: 0 }),
    IsOptional(),
    IsInt(),
    Min(0),
    __metadata("design:type", Number)
], BulkSheetItem.prototype, "sortOrder", void 0);
__decorate([
    ApiProperty({ description: "Target department ID" }),
    IsUUID(),
    __metadata("design:type", String)
], BulkSheetItem.prototype, "departmentId", void 0);
__decorate([
    ApiProperty({ description: "Target level ID" }),
    IsUUID(),
    __metadata("design:type", String)
], BulkSheetItem.prototype, "levelId", void 0);
export class BulkCreateSheetsDto {
    cycleId;
    sheets;
}
__decorate([
    ApiProperty({ description: "Evaluation cycle ID" }),
    IsUUID(),
    __metadata("design:type", String)
], BulkCreateSheetsDto.prototype, "cycleId", void 0);
__decorate([
    ApiProperty({ description: "Array of sheets to create", type: [BulkSheetItem] }),
    IsArray(),
    ArrayMinSize(1),
    ValidateNested({ each: true }),
    Type(() => BulkSheetItem),
    __metadata("design:type", Array)
], BulkCreateSheetsDto.prototype, "sheets", void 0);
//# sourceMappingURL=bulk-create-sheets.dto.js.map