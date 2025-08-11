import { User } from 'src/users/domain/user';
import { UserCreatedAt } from 'src/users/domain/user.created-at';
import { UserEmail } from 'src/users/domain/user.email';
import { UserId } from 'src/users/domain/user.id';
import { UserName } from 'src/users/domain/user.name';
import { UserRepository } from 'src/users/domain/user.repository';

export class UserUpdate {
  constructor(private readonly userRepository: UserRepository) {}

  async run(
    id: string,
    name: string,
    email: string,
    createdAt: Date,
  ): Promise<void> {
    const user = new User(
      new UserId(id),
      new UserName(name),
      new UserEmail(email),
      new UserCreatedAt(createdAt),
    );

    return this.userRepository.update(user);
  }
}
