import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from "class-validator";
import { UserRole } from "../../../../generated/prisma/client.js";

export class CreateUserDto {
  @ApiProperty({ description: "User email address", example: "john.doe@company.com" })
  @IsEmail()
  readonly email!: string;

  @ApiProperty({ description: "Initial password", minLength: 6 })
  @IsString()
  @MinLength(6)
  readonly password!: string;

  @ApiProperty({ description: "First name", example: "John" })
  @IsString()
  readonly firstName!: string;

  @ApiProperty({ description: "Last name", example: "Doe" })
  @IsString()
  readonly lastName!: string;

  @ApiProperty({ description: "User role", enum: UserRole, example: UserRole.EMPLOYEE })
  @IsEnum(UserRole)
  readonly role!: UserRole;

  @ApiPropertyOptional({ description: "Department ID" })
  @IsOptional()
  @IsUUID()
  readonly departmentId?: string;

  @ApiPropertyOptional({ description: "Level ID" })
  @IsOptional()
  @IsUUID()
  readonly levelId?: string;

  @ApiPropertyOptional({ description: "Line manager user ID" })
  @IsOptional()
  @IsUUID()
  readonly lineManagerId?: string;
}
