import { ProductId } from './product.id';
import { ProductImage } from './product.image';
import { ProductName } from './product.name';
import { ProductPrice } from './product.price';

export class Product {
  id: ProductId;
  name: ProductName;
  price: ProductPrice;
  image: ProductImage;

  constructor(
    id: ProductId,
    name: ProductName,
    price: ProductPrice,
    image: ProductImage,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.image = image;
  }
}
