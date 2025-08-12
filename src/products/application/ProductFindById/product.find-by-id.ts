import { Product } from 'src/products/domain/product';
import { ProductId } from 'src/products/domain/product.id';
import { ProductRepository } from 'src/products/domain/product.repository';

export class ProductFindById {
  constructor(private readonly productRepository: ProductRepository) {}

  async run(id: string): Promise<Product> {
    const product = this.productRepository.findById(new ProductId(id));

    // if (!product) throw new ProductNotFoundError(`Product with id ${id} not found`);

    return product;
  }
}
