import { IsEmail, IsString, Length } from '@nestjs/class-validator';

export class UserCreateHttpDto {
  @IsString()
  @Length(5, 255)
  id: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
