import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";

export class LoginDto {
  @ApiProperty({ description: "User email address", example: "admin@eval.com" })
  @IsEmail()
  readonly email!: string;

  @ApiProperty({ description: "User password", example: "SecureP@ss123", minLength: 6 })
  @IsString()
  @MinLength(6)
  readonly password!: string;
}
