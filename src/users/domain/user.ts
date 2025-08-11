import { UserCreatedAt } from './user.created-at';
import { UserEmail } from './user.email';
import { UserId } from './user.id';
import { UserName } from './user.name';

export class User {
  id: UserId;
  name: UserName;
  email: UserEmail;
  createdAt: UserCreatedAt;

  constructor(
    id: UserId,
    name: UserName,
    email: UserEmail,
    createdAt: UserCreatedAt,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
  }
}
