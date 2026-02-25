import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsInt, IsOptional, IsString, IsUUID, Min, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class ManagerScoreItemDto {
  @ApiProperty({ description: "Question ID" })
  @IsUUID()
  readonly questionId!: string;

  @ApiProperty({ description: "Manager score (validated against sheet's score range)", minimum: 1 })
  @IsInt()
  @Min(1)
  readonly score!: number;

  @ApiProperty({ description: "Manager remarks", required: false })
  @IsOptional()
  @IsString()
  readonly remarks?: string;
}

export class SaveManagerReviewDto {
  @ApiProperty({ description: "Array of manager scores per question", type: [ManagerScoreItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ManagerScoreItemDto)
  readonly answers!: ManagerScoreItemDto[];
}
