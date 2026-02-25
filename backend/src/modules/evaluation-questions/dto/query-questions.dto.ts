import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString, IsUUID } from "class-validator";

export class QueryQuestionsDto {
  @ApiPropertyOptional({ description: "Search question text (case-insensitive)" })
  @IsOptional()
  @IsString()
  readonly search?: string;

  @ApiPropertyOptional({ description: "Filter by sheet" })
  @IsOptional()
  @IsUUID()
  readonly sheetId?: string;

  @ApiPropertyOptional({ description: "Filter by cycle (via sheet relation)" })
  @IsOptional()
  @IsUUID()
  readonly cycleId?: string;

  @ApiPropertyOptional({ description: "Filter by department (via sheet relation)" })
  @IsOptional()
  @IsUUID()
  readonly departmentId?: string;

  @ApiPropertyOptional({ description: "Filter by level (via sheet relation)" })
  @IsOptional()
  @IsUUID()
  readonly levelId?: string;
}
