import { Controller, Delete, Inject, Param } from '@nestjs/common';
import { UserDelete } from 'src/users/application/UserDelete/user.delete';
import { UserParamsHttpDto } from '../dto/user-params.http.dto';

@Controller('users')
export class DeleteUserController {
  constructor(
    @Inject('UserDelete')
    private readonly userDelete: UserDelete,
  ) {}

  @Delete(':id')
  async delete(@Param() params: UserParamsHttpDto) {
    return await this.userDelete.run(params.id);
  }
}
