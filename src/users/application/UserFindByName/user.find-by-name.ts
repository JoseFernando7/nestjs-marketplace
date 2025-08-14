import { User } from 'src/users/domain/user';
import { UserName } from 'src/users/domain/user.name';
import { UserRepository } from 'src/users/domain/user.repository';

export class UserFindByName {
  constructor(private readonly userRepository: UserRepository) {}

  async run(name: string): Promise<User | null> {
    return this.userRepository.findByName(new UserName(name));
  }
}
