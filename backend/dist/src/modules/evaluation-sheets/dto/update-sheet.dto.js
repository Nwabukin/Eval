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
import { IsInt, IsOptional, IsString, Min, MinLength } from "class-validator";
export class UpdateSheetDto {
    name;
    weight;
    minScore;
    maxScore;
    sortOrder;
}
__decorate([
    ApiPropertyOptional({ description: "Sheet name" }),
    IsOptional(),
    IsString(),
    MinLength(1),
    __metadata("design:type", String)
], UpdateSheetDto.prototype, "name", void 0);
__decorate([
    ApiPropertyOptional({ description: "Sheet weight in overall evaluation total" }),
    IsOptional(),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], UpdateSheetDto.prototype, "weight", void 0);
__decorate([
    ApiPropertyOptional({ description: "Minimum allowed score" }),
    IsOptional(),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], UpdateSheetDto.prototype, "minScore", void 0);
__decorate([
    ApiPropertyOptional({ description: "Maximum allowed score" }),
    IsOptional(),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], UpdateSheetDto.prototype, "maxScore", void 0);
__decorate([
    ApiPropertyOptional({ description: "Display order" }),
    IsOptional(),
    IsInt(),
    Min(0),
    __metadata("design:type", Number)
], UpdateSheetDto.prototype, "sortOrder", void 0);
//# sourceMappingURL=update-sheet.dto.js.map