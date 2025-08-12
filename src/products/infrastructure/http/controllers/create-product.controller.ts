import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ProductCreate } from 'src/products/application/ProductCreate/product.create';
import { ProductCreateHttpDto } from '../dto/product-create.http.dto';

@Controller('products')
export class CreateProductController {
  constructor(
    @Inject('ProductCreate')
    private readonly productCreate: ProductCreate,
  ) {}

  @Post()
  async create(@Body() body: ProductCreateHttpDto) {
    return await this.productCreate.run(body.id, body.name, body.price);
  }
}
