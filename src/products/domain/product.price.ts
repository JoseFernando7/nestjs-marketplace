export class ProductPrice {
  readonly value: number;

  constructor(value: number) {
    if (value < 0 || typeof value !== 'number') {
      throw new Error('Invalid ProductPrice');
    }
    this.value = value;
  }

  getValue(): number {
    return this.value;
  }

  toString(): string {
    return this.value.toString();
  }
}
