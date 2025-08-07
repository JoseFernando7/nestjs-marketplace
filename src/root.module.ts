import { Module } from '@nestjs/common';
import { UserModule } from './users/infrastructure/NestJs/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeormUserEntity } from './users/infrastructure/TypeOrm/typeorm.user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [TypeormUserEntity],
      synchronize: true, // Set to false in production
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
