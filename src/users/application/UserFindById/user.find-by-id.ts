import { User } from "src/users/domain/user";
import { UserNotFoundError } from "src/users/domain/user.not-found-error";
import { UserRepository } from "src/users/domain/user.repository";
import { UserId } from "src/users/domain/user.id";

export class UserFindById {
  constructor(private readonly userRepository: UserRepository) { }

  async run(id: string): Promise<User | null> {
    const user = this.userRepository.findById(new UserId(id));

    if (!user) throw new UserNotFoundError(`User with id ${id} not found`);

    return user;
  }
}

