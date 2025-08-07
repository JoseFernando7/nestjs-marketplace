import { UserId } from 'src/users/domain/user.id';
import { UserRepository } from 'src/users/domain/user.repository';

export class UserDelete {
  constructor(private readonly userRespository: UserRepository) {}

  async run(id: string): Promise<void> {
    await this.userRespository.delete(new UserId(id));
  }
}
