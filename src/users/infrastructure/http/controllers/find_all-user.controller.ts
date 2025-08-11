import { Controller, Get, Inject } from '@nestjs/common';
import { UserFindAll } from 'src/users/application/UserFindAll/user.find-all';

@Controller('users')
export class FindAllUserController {
  constructor(
    @Inject('UserFindAll') private readonly userFindAll: UserFindAll,
  ) {}

  @Get()
  async findAll() {
    return this.userFindAll.run();
  }
}
