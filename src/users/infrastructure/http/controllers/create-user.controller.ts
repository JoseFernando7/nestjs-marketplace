import { Body, Controller, Inject, Post } from '@nestjs/common';
import { UserCreate } from 'src/users/application/UserCreate/user.create';
import { UserCreateHttpDto } from '../dto/user-create.http.dto';

@Controller('users')
export class CreateUserController {
  constructor(
    @Inject('UserCreate')
    private readonly userCreate: UserCreate,
  ) {}

  @Post()
  async create(@Body() body: UserCreateHttpDto) {
    return await this.userCreate.run(
      body.id,
      body.name,
      body.email,
      new Date(),
    );
  }
}
