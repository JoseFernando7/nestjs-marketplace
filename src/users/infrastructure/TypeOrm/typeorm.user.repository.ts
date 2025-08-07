import { UserRepository } from 'src/users/domain/user.repository';
import { Repository } from 'typeorm';
import { TypeormUserEntity } from './typeorm.user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/domain/user';
import { UserId } from 'src/users/domain/user.id';
import { UserCreatedAt } from 'src/users/domain/user.created-at';
import { UserNotFoundError } from 'src/users/domain/user.not-found-error';

export class TypeormUserRepository implements UserRepository {
  constructor(
    @InjectRepository(TypeormUserEntity)
    private readonly userRepository: Repository<TypeormUserEntity>,
  ) {}

  private mapToDomain(user: TypeormUserEntity): User {
    return new User(
      new UserId(user.id),
      user.name,
      user.email,
      new UserCreatedAt(user.createdAt),
    );
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();

    return users.map((u) => this.mapToDomain(u));
  }

  async findById(id: UserId): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id: id.value },
    });

    if (!user) throw new UserNotFoundError('User does not exist');

    return this.mapToDomain(user);
  }

  async create(user: User): Promise<void> {
    const userEntity = this.userRepository.create({
      id: user.id.value,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt.value,
    });
    await this.userRepository.save(userEntity);
  }

  async update(user: User): Promise<void> {
    await this.userRepository.update(user.id.value, {
      name: user.name,
      email: user.email,
      createdAt: user.createdAt.value,
    });
  }

  async delete(id: UserId): Promise<void> {
    await this.userRepository.delete(id.value);
  }
}
