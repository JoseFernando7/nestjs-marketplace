import { Module } from '@nestjs/common';
import { UserUpdate } from 'src/users/application/UserUpdate/user.update';
import { UserDelete } from 'src/users/application/UserDelete/user.delete';
import { UserCreate } from 'src/users/application/UserCreate/user.create';
import { UserFindById } from 'src/users/application/UserFindById/user.find-by-id';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormUserEntity } from './infrastructure/TypeOrm/typeorm.user.entity';
import { TypeormUserRepository } from './infrastructure/TypeOrm/typeorm.user.repository';
import { UserFindAll } from './application/UserFindAll/user.find-all';
import { FindAllUserController } from './infrastructure/http/controllers/find_all-user.controller';
import { FindByIdUserController } from './infrastructure/http/controllers/find_by_id-user.controller';
import { CreateUserController } from './infrastructure/http/controllers/create-user.controller';
import { UpdateUserController } from './infrastructure/http/controllers/update-user.controller';
import { DeleteUserController } from './infrastructure/http/controllers/delete-user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TypeormUserEntity])],
  controllers: [
    FindAllUserController,
    FindByIdUserController,
    CreateUserController,
    UpdateUserController,
    DeleteUserController,
  ],
  providers: [
    {
      provide: 'UserRepository',
      useClass: TypeormUserRepository,
    },

    {
      provide: 'UserFindAll',
      useFactory: (repository: TypeormUserRepository) =>
        new UserFindAll(repository),
      inject: ['UserRepository'],
    },

    {
      provide: 'UserCreate',
      useFactory: (repository: TypeormUserRepository) =>
        new UserCreate(repository),
      inject: ['UserRepository'],
    },

    {
      provide: 'UserFindById',
      useFactory: (repository: TypeormUserRepository) =>
        new UserFindById(repository),
      inject: ['UserRepository'],
    },

    {
      provide: 'UserUpdate',
      useFactory: (repository: TypeormUserRepository) =>
        new UserUpdate(repository),
      inject: ['UserRepository'],
    },

    {
      provide: 'UserDelete',
      useFactory: (repository: TypeormUserRepository) =>
        new UserDelete(repository),
      inject: ['UserRepository'],
    },
  ],
})
export class UserModule {}
