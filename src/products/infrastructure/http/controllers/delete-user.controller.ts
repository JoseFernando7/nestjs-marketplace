import { Controller, Delete, Inject, Param } from '@nestjs/common';
import { ProductDelete } from 'src/products/application/ProductDelete/product.delete';
import { ProductParamsHttpDto } from '../dto/product-params.http.dto';

@Controller('products')
export class DeleteProductController {
  constructor(
    @Inject('ProductDelete')
    private readonly productDelete: ProductDelete,
  ) {}

  /*
   * This method handles the deletion of a product by its ID.
   * @param id - The ID of the product to be deleted.
   * */
  @Delete(':id')
  async delete(@Param() params: ProductParamsHttpDto): Promise<void> {
    return await this.productDelete.run(params.id);
  }
}
