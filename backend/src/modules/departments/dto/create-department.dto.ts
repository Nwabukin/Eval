import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreateDepartmentDto {
  @ApiProperty({ description: "Department name", example: "Engineering" })
  @IsString()
  @MinLength(1)
  readonly name!: string;
}
