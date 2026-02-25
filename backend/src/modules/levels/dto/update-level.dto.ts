import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString, MinLength } from "class-validator";

export class UpdateLevelDto {
  @ApiPropertyOptional({ description: "Level name" })
  @IsOptional()
  @IsString()
  @MinLength(1)
  readonly name?: string;
}
