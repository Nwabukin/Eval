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
import { IsEnum, IsOptional, IsUUID, IsInt, IsBoolean, IsString, Min, Max } from "class-validator";
import { Transform, Type } from "class-transformer";
import { UserRole } from "../../../../generated/prisma/client.js";
export class QueryUsersDto {
    search;
    role;
    departmentId;
    levelId;
    includeInactive;
    page;
    limit;
}
__decorate([
    ApiPropertyOptional({ description: "Search by name or email (case-insensitive)" }),
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], QueryUsersDto.prototype, "search", void 0);
__decorate([
    ApiPropertyOptional({ description: "Filter by role", enum: UserRole }),
    IsOptional(),
    IsEnum(UserRole),
    __metadata("design:type", String)
], QueryUsersDto.prototype, "role", void 0);
__decorate([
    ApiPropertyOptional({ description: "Filter by department" }),
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], QueryUsersDto.prototype, "departmentId", void 0);
__decorate([
    ApiPropertyOptional({ description: "Filter by level" }),
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], QueryUsersDto.prototype, "levelId", void 0);
__decorate([
    ApiPropertyOptional({ description: "Include deactivated users (default false)", default: false }),
    IsOptional(),
    Transform(({ value }) => value === "true" || value === true),
    IsBoolean(),
    __metadata("design:type", Boolean)
], QueryUsersDto.prototype, "includeInactive", void 0);
__decorate([
    ApiPropertyOptional({ description: "Page number", default: 1 }),
    IsOptional(),
    Type(() => Number),
    IsInt(),
    Min(1),
    __metadata("design:type", Number)
], QueryUsersDto.prototype, "page", void 0);
__decorate([
    ApiPropertyOptional({ description: "Items per page", default: 20 }),
    IsOptional(),
    Type(() => Number),
    IsInt(),
    Min(1),
    Max(100),
    __metadata("design:type", Number)
], QueryUsersDto.prototype, "limit", void 0);
//# sourceMappingURL=query-users.dto.js.map