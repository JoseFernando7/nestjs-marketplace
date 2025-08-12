import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { TypeormUserEntity } from './users/infrastructure/TypeOrm/typeorm.user.entity';
import { ProductModule } from './products/product.module';
import { TypeormProductEntity } from './products/infrastructure/TypeOrm/typeorm.product.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [TypeormUserEntity, TypeormProductEntity],
      synchronize: process.env.NODE_ENV === 'dev', // Set to false in production
    }),
    UserModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
