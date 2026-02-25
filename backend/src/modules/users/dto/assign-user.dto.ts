import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional, IsUUID } from "class-validator";

export class AssignUserDto {
  @ApiPropertyOptional({ description: "Department ID to assign" })
  @IsOptional()
  @IsUUID()
  readonly departmentId?: string;

  @ApiPropertyOptional({ description: "Level ID to assign" })
  @IsOptional()
  @IsUUID()
  readonly levelId?: string;

  @ApiPropertyOptional({ description: "Line manager user ID to assign" })
  @IsOptional()
  @IsUUID()
  readonly lineManagerId?: string;
}
