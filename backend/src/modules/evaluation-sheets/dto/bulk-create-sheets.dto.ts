import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsInt, IsOptional, IsString, IsUUID, Min, MinLength, ValidateNested } from "class-validator";

class BulkSheetItem {
  @ApiProperty({ description: "Sheet/section name", example: "GENERAL" })
  @IsString()
  @MinLength(1)
  readonly name!: string;

  @ApiPropertyOptional({ description: "Sheet weight", example: 100, default: 100 })
  @IsOptional()
  @IsInt()
  @Min(1)
  readonly weight?: number;

  @ApiPropertyOptional({ description: "Minimum allowed score", example: 1, default: 1 })
  @IsOptional()
  @IsInt()
  @Min(1)
  readonly minScore?: number;

  @ApiPropertyOptional({ description: "Maximum allowed score", example: 10, default: 10 })
  @IsOptional()
  @IsInt()
  @Min(1)
  readonly maxScore?: number;

  @ApiPropertyOptional({ description: "Display order", example: 0, default: 0 })
  @IsOptional()
  @IsInt()
  @Min(0)
  readonly sortOrder?: number;

  @ApiProperty({ description: "Target department ID" })
  @IsUUID()
  readonly departmentId!: string;

  @ApiProperty({ description: "Target level ID" })
  @IsUUID()
  readonly levelId!: string;
}

export class BulkCreateSheetsDto {
  @ApiProperty({ description: "Evaluation cycle ID" })
  @IsUUID()
  readonly cycleId!: string;

  @ApiProperty({ description: "Array of sheets to create", type: [BulkSheetItem] })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => BulkSheetItem)
  readonly sheets!: BulkSheetItem[];
}
