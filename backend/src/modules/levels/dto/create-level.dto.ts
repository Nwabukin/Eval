import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreateLevelDto {
  @ApiProperty({ description: "Level name", example: "Intern" })
  @IsString()
  @MinLength(1)
  readonly name!: string;
}
