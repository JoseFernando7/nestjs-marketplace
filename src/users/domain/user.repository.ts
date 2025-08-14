import { User } from './user';
import { UserId } from './user.id';
import { UserName } from './user.name';

export interface UserRepository {
  create(user: User): Promise<void>;
  findAll(): Promise<User[]>;
  findById(id: UserId): Promise<User>;
  findByName(name: UserName): Promise<User | null>;
  update(user: User): Promise<void>;
  delete(id: UserId): Promise<void>;
}
