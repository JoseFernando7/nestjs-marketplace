export class ProductImage {
  readonly value: string;

  constructor(value: string) {
    if (!value || typeof value !== 'string') {
      throw new Error('Invalid product image value');
    }
    this.value = value;
  }
}
