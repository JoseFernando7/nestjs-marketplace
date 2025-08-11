export class UserName {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
    this.ensureIsValid();
  }

  private ensureIsValid() {
    if (this.value.length < 3) {
      throw new Error('User name must be at least 3 characters long');
    }
  }
}
