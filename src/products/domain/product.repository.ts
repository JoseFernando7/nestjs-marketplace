import { Product } from './product';
import { ProductId } from './product.id';

export interface ProductRepository {
  create(product: Product): Promise<void>;
  findAll(): Promise<Product[]>;
  findById(id: ProductId): Promise<Product>;
  delete(id: ProductId): Promise<void>;
}
