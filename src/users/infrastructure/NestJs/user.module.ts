import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypeormUserRepository } from '../TypeOrm/typeorm.user.repository';
import { UserFindAll } from 'src/users/application/UserFindAll/user.find-all';
import { UserUpdate } from 'src/users/application/UserUpdate/user.update';
import { UserDelete } from 'src/users/application/UserDelete/user.delete';
import { UserCreate } from 'src/users/application/UserCreate/user.create';
import { UserFindById } from 'src/users/application/UserFindById/user.find-by-id';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormUserEntity } from '../TypeOrm/typeorm.user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeormUserEntity])],
  controllers: [UserController],
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
      useFactory: (repository: TypeormUserRepository) => {
        new UserCreate(repository);
      },
      inject: ['UserRepository'],
    },

    {
      provide: 'UserFindById',
      useFactory: (repository: TypeormUserRepository) => {
        new UserFindById(repository);
      },
      inject: ['UserRepository'],
    },

    {
      provide: 'UserUpdate',
      useFactory: (repository: TypeormUserRepository) => {
        new UserUpdate(repository);
      },
      inject: ['UserRepository'],
    },

    {
      provide: 'UserDelete',
      useFactory: (repository: TypeormUserRepository) => {
        new UserDelete(repository);
      },
      inject: ['UserRepository'],
    },
  ],
})
export class UserModule {}
