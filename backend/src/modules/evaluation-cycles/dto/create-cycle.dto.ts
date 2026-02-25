import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsDateString, IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class CreateCycleDto {
  @ApiProperty({ description: "Cycle name", example: "Q1 2026 Review" })
  @IsString()
  @MinLength(1)
  readonly name!: string;

  @ApiProperty({ description: "Cycle start date", example: "2026-01-01" })
  @IsDateString()
  readonly startDate!: string;

  @ApiProperty({ description: "Cycle end date", example: "2026-03-31" })
  @IsDateString()
  readonly endDate!: string;

  @ApiPropertyOptional({
    description: "User IDs of calibration team members for this cycle",
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsUUID("4", { each: true })
  readonly calibrationMemberIds?: string[];
}
