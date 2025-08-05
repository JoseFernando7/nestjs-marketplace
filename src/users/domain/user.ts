import { UserCreatedAt } from "./UserCreatedAt";
import { UserId } from "./UserId";

export class User {
  id: UserId;
  name: string;
  email: string;
  createdAt: UserCreatedAt;

  constructor(id: UserId, name: string, email: string, createdAt: UserCreatedAt) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.createdAt = createdAt;
  }
}

