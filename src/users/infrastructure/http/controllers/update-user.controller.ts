import { Body, Controller, Inject, Param, Put } from '@nestjs/common';
import { UserUpdate } from 'src/users/application/UserUpdate/user.update';
import { UserParamsHttpDto } from '../dto/user-params.http.dto';
import { UserUpdateHttpDto } from '../dto/user-update.http.dto';

@Controller('users')
export class UpdateUserController {
  constructor(
    @Inject('UserUpdate')
    private readonly userUpdate: UserUpdate,
  ) {}

  @Put(':id')
  async update(
    @Param() params: UserParamsHttpDto,
    @Body() body: UserUpdateHttpDto,
  ) {
    return await this.userUpdate.run(
      params.id,
      body.name,
      body.email,
      new Date(),
    );
  }
}
