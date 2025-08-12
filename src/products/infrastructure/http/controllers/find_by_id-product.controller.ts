import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ProductFindById } from 'src/products/application/ProductFindById/product.find-by-id';
import { ProductParamsHttpDto } from '../dto/product-params.http.dto';

@Controller('products')
export class FindByIdProductController {
  constructor(
    @Inject('ProductFindById')
    private readonly productFindById: ProductFindById,
  ) {}

  /*
   * Handles the HTTP GET request to retrieve a product by its ID.
   * @param id - The ID of the product to retrieve.
   * @returns A promise that resolves to the product with the specified ID.
   * */
  @Get(':id')
  async findById(@Param() params: ProductParamsHttpDto) {
    return this.productFindById.run(params.id);
  }
}
