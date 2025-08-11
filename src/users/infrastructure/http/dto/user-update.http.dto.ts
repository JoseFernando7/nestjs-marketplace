import { IsEmail, IsString } from '@nestjs/class-validator';

export class UserUpdateHttpDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
