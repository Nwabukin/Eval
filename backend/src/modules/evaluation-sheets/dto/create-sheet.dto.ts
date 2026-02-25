import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString, IsUUID, Min, MinLength } from "class-validator";

export class CreateSheetDto {
  @ApiProperty({ description: "Sheet/section name", example: "GENERAL" })
  @IsString()
  @MinLength(1)
  readonly name!: string;

  @ApiPropertyOptional({ description: "Sheet weight in overall evaluation total", example: 100, default: 100 })
  @IsOptional()
  @IsInt()
  @Min(1)
  readonly weight?: number;

  @ApiPropertyOptional({ description: "Minimum allowed score for questions in this sheet", example: 1, default: 1 })
  @IsOptional()
  @IsInt()
  @Min(1)
  readonly minScore?: number;

  @ApiPropertyOptional({ description: "Maximum allowed score for questions in this sheet", example: 10, default: 10 })
  @IsOptional()
  @IsInt()
  @Min(1)
  readonly maxScore?: number;

  @ApiPropertyOptional({ description: "Display order", example: 0, default: 0 })
  @IsOptional()
  @IsInt()
  @Min(0)
  readonly sortOrder?: number;

  @ApiProperty({ description: "Evaluation cycle ID" })
  @IsUUID()
  readonly cycleId!: string;

  @ApiProperty({ description: "Target department ID" })
  @IsUUID()
  readonly departmentId!: string;

  @ApiProperty({ description: "Target level ID" })
  @IsUUID()
  readonly levelId!: string;
}
