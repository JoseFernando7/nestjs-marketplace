import { UserCreatedAt } from './user.created-at';
import { UserId } from './user.id';

export class User {
  id: UserId;
  name: string;
  email: string;
  createdAt: UserCreatedAt;

  constructor(
    id: UserId,
    name: string,
    email: string,
    createdAt: UserCreatedAt,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
  }
}
