import { User } from "src/users/domain/user";
import { UserCreatedAt } from "src/users/domain/user.created-at";
import { UserId } from "src/users/domain/user.id";
import { UserRepository } from "src/users/domain/user.repository";

export class UserUpdate {
  constructor(private readonly userRepository: UserRepository) { }

  async run(id: string, name: string, email: string, createdAt: Date): Promise<void> {
    const user = new User(new UserId(id), name, email, new UserCreatedAt(createdAt));

    return this.userRepository.update(user);
  }
}

