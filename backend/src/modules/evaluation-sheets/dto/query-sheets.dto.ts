import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsUUID } from "class-validator";

export class QuerySheetsDto {
  @ApiPropertyOptional({ description: "Filter by cycle" })
  @IsOptional()
  @IsUUID()
  readonly cycleId?: string;

  @ApiPropertyOptional({ description: "Filter by department" })
  @IsOptional()
  @IsUUID()
  readonly departmentId?: string;

  @ApiPropertyOptional({ description: "Filter by level" })
  @IsOptional()
  @IsUUID()
  readonly levelId?: string;
}
