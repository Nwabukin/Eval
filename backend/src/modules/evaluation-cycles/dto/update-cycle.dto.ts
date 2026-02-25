import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsArray, IsDateString, IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class UpdateCycleDto {
  @ApiPropertyOptional({ description: "Cycle name" })
  @IsOptional()
  @IsString()
  @MinLength(1)
  readonly name?: string;

  @ApiPropertyOptional({ description: "Start date" })
  @IsOptional()
  @IsDateString()
  readonly startDate?: string;

  @ApiPropertyOptional({ description: "End date" })
  @IsOptional()
  @IsDateString()
  readonly endDate?: string;

  @ApiPropertyOptional({
    description: "Replace calibration team members — full list of user IDs",
    type: [String],
  })
  @IsOptional()
  @IsArray()
  @IsUUID("4", { each: true })
  readonly calibrationMemberIds?: string[];
}
