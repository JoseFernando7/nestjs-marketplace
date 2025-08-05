import { UserRepository } from "src/users/domain/user.repository";
import { UserId } from "src/users/domain/user.id";
import { UserCreatedAt } from "src/users/domain/user.created-at";
import { User } from "src/users/domain/user";

export class UserCreate {
  constructor(private readonly userRespository: UserRepository) { }

  async run(id: string, name: string, email: string, createdAt: Date): Promise<void> {
    const user = new User(
      new UserId(id),
      name,
      email,
      new UserCreatedAt(createdAt)
    );

    return this.userRespository.create(user);
  }
}

