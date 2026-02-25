import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class ChangePasswordDto {
  @ApiProperty({ description: "Current password" })
  @IsString()
  readonly currentPassword!: string;

  @ApiProperty({ description: "New password", minLength: 6 })
  @IsString()
  @MinLength(6)
  readonly newPassword!: string;
}
