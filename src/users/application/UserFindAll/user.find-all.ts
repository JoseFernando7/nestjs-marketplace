import { User } from 'src/users/domain/user';
import { UserRepository } from 'src/users/domain/user.repository';

export class UserFindAll {
  constructor(private readonly userRepository: UserRepository) {}

  async run(): Promise<User[]> {
    return this.userRepository.findAll();
  }
}
