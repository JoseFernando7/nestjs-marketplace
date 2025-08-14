import { Controller, Get, Inject, Param } from '@nestjs/common';
import { UserFindByName } from 'src/users/application/UserFindByName/user.find-by-name';
import { UserParamsHttpDto } from '../dto/user-params.http.dto';

@Controller('users')
export class FindByNameUserController {
  constructor(
    @Inject('UserFindByName') private readonly userFindByName: UserFindByName,
  ) {}

  @Get('name/:name')
  async findByName(@Param() params: UserParamsHttpDto) {
    return this.userFindByName.run(params.name);
  }
}
