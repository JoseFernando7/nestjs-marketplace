import { Product } from 'src/products/domain/product';
import { ProductId } from 'src/products/domain/product.id';
import { ProductImage } from 'src/products/domain/product.image';
import { ProductName } from 'src/products/domain/product.name';
import { ProductPrice } from 'src/products/domain/product.price';
import { ProductRepository } from 'src/products/domain/product.repository';

export class ProductCreate {
  constructor(private readonly productRepository: ProductRepository) {}

  async run(
    id: string,
    name: string,
    price: number,
    image: string,
  ): Promise<void> {
    const product = new Product(
      new ProductId(id),
      new ProductName(name),
      new ProductPrice(price),
      new ProductImage(image),
    );

    return this.productRepository.create(product);
  }
}
