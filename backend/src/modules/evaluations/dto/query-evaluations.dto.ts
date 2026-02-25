import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsInt, IsOptional, IsString, IsUUID, Max, Min } from "class-validator";
import { Type } from "class-transformer";
import { EvaluationStatus } from "../../../../generated/prisma/client.js";

export class QueryEvaluationsDto {
  @ApiPropertyOptional({ description: "Filter by evaluation cycle" })
  @IsOptional()
  @IsUUID()
  readonly cycleId?: string;

  @ApiPropertyOptional({ description: "Filter by status", enum: EvaluationStatus })
  @IsOptional()
  @IsEnum(EvaluationStatus)
  readonly status?: EvaluationStatus;

  @ApiPropertyOptional({ description: "Filter by department" })
  @IsOptional()
  @IsUUID()
  readonly departmentId?: string;

  @ApiPropertyOptional({ description: "Search employee name (case-insensitive)" })
  @IsOptional()
  @IsString()
  readonly search?: string;

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
