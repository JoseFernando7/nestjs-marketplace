export class UserId {
  readonly value: string;

  constructor(value: string) {
    if (!value || typeof value !== 'string') {
      throw new Error('Invalid UserId');
    }
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }
}
