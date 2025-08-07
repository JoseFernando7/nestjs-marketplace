import { User } from './user';
import { UserId } from './user.id';

export interface UserRepository {
  create(user: User): Promise<void>;
  findAll(): Promise<User[]>;
  findById(id: UserId): Promise<User>;
  update(user: User): Promise<void>;
  delete(id: UserId): Promise<void>;
}
