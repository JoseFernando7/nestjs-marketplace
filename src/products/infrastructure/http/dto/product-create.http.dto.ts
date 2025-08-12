import { IsNumber, IsString, Length } from '@nestjs/class-validator';

export class ProductCreateHttpDto {
  @IsString()
  @Length(5, 255)
  id: string;

  @IsString()
  name: string;

  @IsNumber()
  price: number;
}
