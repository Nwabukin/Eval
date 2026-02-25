import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsInt, IsOptional, IsString, IsUUID, Min, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class SelfScoreItemDto {
  @ApiProperty({ description: "Question ID" })
  @IsUUID()
  readonly questionId!: string;

  @ApiProperty({ description: "Self-assessed score (validated against sheet's score range)", minimum: 1 })
  @IsInt()
  @Min(1)
  readonly score!: number;

  @ApiProperty({ description: "Self remarks", required: false })
  @IsOptional()
  @IsString()
  readonly remarks?: string;
}

export class SaveSelfEvaluationDto {
  @ApiProperty({ description: "Array of self scores per question", type: [SelfScoreItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => SelfScoreItemDto)
  readonly answers!: SelfScoreItemDto[];
}
