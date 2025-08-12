import { ProductId } from 'src/products/domain/product.id';
import { ProductRepository } from 'src/products/domain/product.repository';

export class ProductDelete {
  constructor(private readonly productRepository: ProductRepository) {}

  async run(id: string): Promise<void> {
    return this.productRepository.delete(new ProductId(id));
  }
}
