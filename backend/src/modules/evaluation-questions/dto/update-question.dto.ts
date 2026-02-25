import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString, MinLength } from "class-validator";

export class UpdateQuestionDto {
  @ApiPropertyOptional({ description: "Question text" })
  @IsOptional()
  @IsString()
  @MinLength(5)
  readonly text?: string;
}
