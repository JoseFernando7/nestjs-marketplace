import { Controller, Get, Inject, Param } from '@nestjs/common';
import { UserFindById } from 'src/users/application/UserFindById/user.find-by-id';
import { UserParamsHttpDto } from '../dto/user-params.http.dto';

@Controller('users')
export class FindByIdUserController {
  constructor(
    @Inject('UserFindById') private readonly userFindById: UserFindById,
  ) {}

  @Get(':id')
  async findById(@Param() params: UserParamsHttpDto) {
    return this.userFindById.run(params.id);
  }
}
