import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from "class-validator";
import { UserRole } from "../../../../generated/prisma/client.js";

export class UpdateUserDto {
  @ApiPropertyOptional({ description: "Email address" })
  @IsOptional()
  @IsEmail()
  readonly email?: string;

  @ApiPropertyOptional({ description: "First name" })
  @IsOptional()
  @IsString()
  readonly firstName?: string;

  @ApiPropertyOptional({ description: "Last name" })
  @IsOptional()
  @IsString()
  readonly lastName?: string;

  @ApiPropertyOptional({ description: "Role", enum: UserRole })
  @IsOptional()
  @IsEnum(UserRole)
  readonly role?: UserRole;

  @ApiPropertyOptional({ description: "New password", minLength: 6 })
  @IsOptional()
  @IsString()
  @MinLength(6)
  readonly password?: string;
}
