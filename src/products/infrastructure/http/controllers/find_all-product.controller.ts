import { Controller, Get, Inject } from '@nestjs/common';
import { ProductFindAll } from 'src/products/application/ProductFindAll/product.find-all';

@Controller('products')
export class FindAllProductController {
  constructor(
    @Inject('ProductFindAll')
    private readonly productFindAll: ProductFindAll,
  ) {}

  /**
   * Handles the HTTP GET request to retrieve all products.
   * @returns A promise that resolves to the list of all products.
   */
  @Get()
  async findAll() {
    return await this.productFindAll.run();
  }
}
