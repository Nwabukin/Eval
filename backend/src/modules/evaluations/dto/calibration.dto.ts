import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsEnum, IsInt, IsUUID, Min, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CalibrationMode } from "../../../../generated/prisma/client.js";

export class SetCalibrationModeDto {
  @ApiProperty({ description: "Calibration scoring mode", enum: CalibrationMode })
  @IsEnum(CalibrationMode)
  readonly mode!: CalibrationMode;
}

export class DirectFinalScoreItemDto {
  @ApiProperty({ description: "Question ID" })
  @IsUUID()
  readonly questionId!: string;

  @ApiProperty({ description: "Final calibrated score (validated against sheet's score range)", minimum: 1 })
  @IsInt()
  @Min(1)
  readonly finalScore!: number;
}

export class SaveDirectCalibrationDto {
  @ApiProperty({ type: [DirectFinalScoreItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => DirectFinalScoreItemDto)
  readonly answers!: DirectFinalScoreItemDto[];
}

export class IndividualScoreItemDto {
  @ApiProperty({ description: "Question ID" })
  @IsUUID()
  readonly questionId!: string;

  @ApiProperty({ description: "Individual calibrator score (validated against sheet's score range)", minimum: 1 })
  @IsInt()
  @Min(1)
  readonly score!: number;
}

export class SaveIndividualCalibrationDto {
  @ApiProperty({ type: [IndividualScoreItemDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => IndividualScoreItemDto)
  readonly answers!: IndividualScoreItemDto[];
}
