import { ProductRepository } from 'src/products/domain/product.repository';
import { Repository } from 'typeorm';
import { TypeormProductEntity } from './typeorm.product.entity';
import { Product } from 'src/products/domain/product';
import { ProductId } from 'src/products/domain/product.id';
import { ProductName } from 'src/products/domain/product.name';
import { ProductPrice } from 'src/products/domain/product.price';
import { InjectRepository } from '@nestjs/typeorm';

export class TypeormProductRepository implements ProductRepository {
  constructor(
    @InjectRepository(TypeormProductEntity)
    private readonly productRepository: Repository<TypeormProductEntity>,
  ) {}

  private mapToDomain(product: TypeormProductEntity): Product {
    return new Product(
      new ProductId(product.id),
      new ProductName(product.name),
      new ProductPrice(product.price),
    );
  }

  async create(product: Product): Promise<void> {
    const productEntity = this.productRepository.create({
      id: product.id.value,
      name: product.name.value,
      price: product.price.value,
    });
    await this.productRepository.save(productEntity);
  }

  async findAll(): Promise<Product[]> {
    const products = await this.productRepository.find();

    return products.map((p) => this.mapToDomain(p));
  }

  async findById(id: ProductId): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id: id.value },
    });

    if (!product) {
      throw new Error('Product not found');
    }

    return this.mapToDomain(product);
  }

  async delete(id: ProductId): Promise<void> {
    const result = await this.productRepository.delete(id.value);
    if (result.affected === 0) {
      throw new Error('Product not found');
    }
  }
}
