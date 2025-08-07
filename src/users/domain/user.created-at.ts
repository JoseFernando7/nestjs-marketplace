export class UserCreatedAt {
  readonly value: Date;

  constructor(value: Date) {
    if (!(value instanceof Date) || isNaN(value.getTime())) {
      throw new Error('Invalid UserCreatedAt');
    }
    this.value = value;
  }

  getValue(): Date {
    return this.value;
  }

  toString(): string {
    return this.value.toISOString();
  }
}
