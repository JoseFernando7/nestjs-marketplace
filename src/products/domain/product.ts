import { ProductId } from './product.id';
import { ProductName } from './product.name';
import { ProductPrice } from './product.price';

export class Product {
  id: ProductId;
  name: ProductName;
  price: ProductPrice;

  constructor(id: ProductId, name: ProductName, price: ProductPrice) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
