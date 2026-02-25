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
import { IsOptional, IsUUID } from "class-validator";
export class AssignUserDto {
    departmentId;
    levelId;
    lineManagerId;
}
__decorate([
    ApiPropertyOptional({ description: "Department ID to assign" }),
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], AssignUserDto.prototype, "departmentId", void 0);
__decorate([
    ApiPropertyOptional({ description: "Level ID to assign" }),
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], AssignUserDto.prototype, "levelId", void 0);
__decorate([
    ApiPropertyOptional({ description: "Line manager user ID to assign" }),
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], AssignUserDto.prototype, "lineManagerId", void 0);
//# sourceMappingURL=assign-user.dto.js.map