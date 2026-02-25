import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsInt, IsOptional, IsString, IsUUID, Min, MinLength } from "class-validator";

export class CreateQuestionDto {
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

  @ApiProperty({ description: "Evaluation sheet ID this question belongs to" })
  @IsUUID()
  readonly sheetId!: string;
}
