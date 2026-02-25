import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { ArrayMinSize, IsArray, IsInt, IsOptional, IsString, IsUUID, Min, MinLength, ValidateNested } from "class-validator";

class BulkQuestionItem {
  @ApiProperty({ description: "Question text", example: "How well does the employee meet deadlines?" })
  @IsString()
  @MinLength(5)
  readonly text!: string;

  @ApiPropertyOptional({ description: "Objective/section category grouping", example: "TEAMWORK" })
  @IsOptional()
  @IsString()
  readonly category?: string;

  @ApiPropertyOptional({ description: "Relative weight in the evaluation total", example: 10, default: 10 })
  @IsOptional()
  @IsInt()
  @Min(1)
  readonly weight?: number;

  @ApiPropertyOptional({ description: "Display order within the form", example: 1, default: 0 })
  @IsOptional()
  @IsInt()
  @Min(0)
  readonly sortOrder?: number;
}

export class BulkCreateQuestionsDto {
  @ApiProperty({ description: "Evaluation sheet ID — all questions will belong to this sheet" })
  @IsUUID()
  readonly sheetId!: string;

  @ApiProperty({ description: "Array of questions to create", type: [BulkQuestionItem] })
  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => BulkQuestionItem)
  readonly questions!: BulkQuestionItem[];
}
