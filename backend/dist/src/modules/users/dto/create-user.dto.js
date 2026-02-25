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
import { IsEmail, IsEnum, IsOptional, IsString, IsUUID, MinLength, } from "class-validator";
import { UserRole } from "../../../../generated/prisma/client.js";
export class CreateUserDto {
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
], CreateUserDto.prototype, "email", void 0);
__decorate([
    ApiProperty({ description: "Initial password", minLength: 6 }),
    IsString(),
    MinLength(6),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    ApiProperty({ description: "First name", example: "John" }),
    IsString(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    ApiProperty({ description: "Last name", example: "Doe" }),
    IsString(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    ApiProperty({ description: "User role", enum: UserRole, example: UserRole.EMPLOYEE }),
    IsEnum(UserRole),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
__decorate([
    ApiPropertyOptional({ description: "Department ID" }),
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "departmentId", void 0);
__decorate([
    ApiPropertyOptional({ description: "Level ID" }),
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "levelId", void 0);
__decorate([
    ApiPropertyOptional({ description: "Line manager user ID" }),
    IsOptional(),
    IsUUID(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lineManagerId", void 0);
//# sourceMappingURL=create-user.dto.js.map