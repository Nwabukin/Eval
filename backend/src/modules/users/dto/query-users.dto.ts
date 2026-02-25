import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsUUID, IsInt, IsBoolean, IsString, Min, Max } from "class-validator";
import { Transform, Type } from "class-transformer";
import { UserRole } from "../../../../generated/prisma/client.js";

export class QueryUsersDto {
  @ApiPropertyOptional({ description: "Search by name or email (case-insensitive)" })
  @IsOptional()
  @IsString()
  readonly search?: string;

  @ApiPropertyOptional({ description: "Filter by role", enum: UserRole })
  @IsOptional()
  @IsEnum(UserRole)
  readonly role?: UserRole;

  @ApiPropertyOptional({ description: "Filter by department" })
  @IsOptional()
  @IsUUID()
  readonly departmentId?: string;

  @ApiPropertyOptional({ description: "Filter by level" })
  @IsOptional()
  @IsUUID()
  readonly levelId?: string;

  @ApiPropertyOptional({ description: "Include deactivated users (default false)", default: false })
  @IsOptional()
  @Transform(({ value }) => value === "true" || value === true)
  @IsBoolean()
  readonly includeInactive?: boolean;

  @ApiPropertyOptional({ description: "Page number", default: 1 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  readonly page?: number;

  @ApiPropertyOptional({ description: "Items per page", default: 20 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  readonly limit?: number;
}
