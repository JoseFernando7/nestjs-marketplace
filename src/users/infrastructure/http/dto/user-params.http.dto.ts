import { IsString, Length } from '@nestjs/class-validator';

export class UserParamsHttpDto {
  @IsString()
  @Length(5, 255)
  id: string;
}
