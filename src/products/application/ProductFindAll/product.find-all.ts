import { Product } from 'src/products/domain/product';
import { ProductRepository } from 'src/products/domain/product.repository';

export class ProductFindAll {
  constructor(private readonly productRepository: ProductRepository) {}

  async run(): Promise<Product[]> {
    return this.productRepository.findAll();
  }
}
