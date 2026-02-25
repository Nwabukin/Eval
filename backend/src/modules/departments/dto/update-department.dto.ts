import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsString, MinLength } from "class-validator";

export class UpdateDepartmentDto {
  @ApiPropertyOptional({ description: "Department name" })
  @IsOptional()
  @IsString()
  @MinLength(1)
  readonly name?: string;
}
