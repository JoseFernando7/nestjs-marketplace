import { UserRepository } from 'src/users/domain/user.repository';
import { UserId } from 'src/users/domain/user.id';
import { UserCreatedAt } from 'src/users/domain/user.created-at';
import { User } from 'src/users/domain/user';
import { UserName } from 'src/users/domain/user.name';
import { UserEmail } from 'src/users/domain/user.email';

export class UserCreate {
  constructor(private readonly userRespository: UserRepository) {}

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

    return this.userRespository.create(user);
  }
}
