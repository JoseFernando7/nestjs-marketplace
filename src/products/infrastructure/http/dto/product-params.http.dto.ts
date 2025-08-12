import { IsString, Length } from '@nestjs/class-validator';

export class ProductParamsHttpDto {
  @IsString()
  @Length(5, 255)
  id: string;
}
