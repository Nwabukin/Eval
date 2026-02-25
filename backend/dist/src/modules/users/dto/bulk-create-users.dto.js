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
import { ArrayMinSize, IsArray, IsEmail, IsEnum, IsOptional, IsString, IsUUID, MinLength, ValidateNested, } from "class-validator";
import { UserRole } from "../../../../generated/prisma/client.js";
class BulkUserItem {
    email;
    password;
    firstName;
    lastName;
    role;
    departmentId;
    levelId;
    lineManagerId;
}
__decorate([
    ApiProperty({ description: "User email address", example: "john.doe@company.com" }),
    IsEmail(),
    __metadata("design:type", String)
], BulkUserItem.prototype, "email", void 0);
__decorate([
    ApiProperty({ description: "Initial password", minLength: 6 }),
    IsString(),
    MinLength(6),
    __metadata("design:type", String)
], BulkUserItem.prototype, "password", void 0);
__decorate([
    ApiProperty({ description: "First name", example: "John" }),
    IsString(),
    __metadata("design:type", String)
], BulkUserItem.prototype, "firstName", void 0);
__decorate([
    ApiProperty({ description: "Last name", example: "Doe" }),
    IsString(),
    __metadata("design:type", String)
], BulkUserItem.prototype, "lastName", void 0);
__decorate([
    ApiProperty({ description: "User role", enum: UserRole, example: UserRole.EMPLOYEE }),
    IsEnum(UserRole),
    __metadata("design:type", String)
], BulkUserItem.prototype, "role", void 0);
__decorate([
    ApiPropertyOptional({ description: "Department ID" }),
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], BulkUserItem.prototype, "departmentId", void 0);
__decorate([
    ApiPropertyOptional({ description: "Level ID" }),
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], BulkUserItem.prototype, "levelId", void 0);
__decorate([
    ApiPropertyOptional({ description: "Line manager user ID" }),
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], BulkUserItem.prototype, "lineManagerId", void 0);
export class BulkCreateUsersDto {
    users;
}
__decorate([
    ApiProperty({ description: "Array of users to create", type: [BulkUserItem] }),
    IsArray(),
    ArrayMinSize(1),
    ValidateNested({ each: true }),
    Type(() => BulkUserItem),
    __metadata("design:type", Array)
], BulkCreateUsersDto.prototype, "users", void 0);
//# sourceMappingURL=bulk-create-users.dto.js.map