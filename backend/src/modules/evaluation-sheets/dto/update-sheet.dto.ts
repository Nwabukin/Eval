import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString, Min, MinLength } from "class-validator";

export class UpdateSheetDto {
  @ApiPropertyOptional({ description: "Sheet name" })
  @IsOptional()
  @IsString()
  @MinLength(1)
  readonly name?: string;

  @ApiPropertyOptional({ description: "Sheet weight in overall evaluation total" })
  @IsOptional()
  @IsInt()
  @Min(1)
  readonly weight?: number;

  @ApiPropertyOptional({ description: "Minimum allowed score" })
  @IsOptional()
  @IsInt()
  @Min(1)
  readonly minScore?: number;

  @ApiPropertyOptional({ description: "Maximum allowed score" })
  @IsOptional()
  @IsInt()
  @Min(1)
  readonly maxScore?: number;

  @ApiPropertyOptional({ description: "Display order" })
  @IsOptional()
  @IsInt()
  @Min(0)
  readonly sortOrder?: number;
}
