import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeormProductEntity } from './infrastructure/TypeOrm/typeorm.product.entity';
import { CreateProductController } from './infrastructure/http/controllers/create-product.controller';
import { FindAllProductController } from './infrastructure/http/controllers/find_all-product.controller';
import { FindByIdProductController } from './infrastructure/http/controllers/find_by_id-product.controller';
import { DeleteProductController } from './infrastructure/http/controllers/delete-user.controller';
import { ProductCreate } from './application/ProductCreate/product.create';
import { ProductFindAll } from './application/ProductFindAll/product.find-all';
import { ProductFindById } from './application/ProductFindById/product.find-by-id';
import { ProductDelete } from './application/ProductDelete/product.delete';
import { TypeormProductRepository } from './infrastructure/TypeOrm/typeorm.product.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TypeormProductEntity])],
  controllers: [
    CreateProductController,
    FindAllProductController,
    FindByIdProductController,
    DeleteProductController,
  ],
  providers: [
    {
      provide: 'ProductRepository',
      useClass: TypeormProductRepository,
    },

    {
      provide: 'ProductCreate',
      useFactory: (repository: TypeormProductRepository) =>
        new ProductCreate(repository),
      inject: ['ProductRepository'],
    },

    {
      provide: 'ProductFindAll',
      useFactory: (repository: TypeormProductRepository) =>
        new ProductFindAll(repository),
      inject: ['ProductRepository'],
    },

    {
      provide: 'ProductFindById',
      useFactory: (repository: TypeormProductRepository) =>
        new ProductFindById(repository),
      inject: ['ProductRepository'],
    },

    {
      provide: 'ProductDelete',
      useFactory: (repository: TypeormProductRepository) =>
        new ProductDelete(repository),
      inject: ['ProductRepository'],
    },
  ],
})
export class ProductModule {}
