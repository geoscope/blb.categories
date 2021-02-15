import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { CategoriesHydratorService } from './categories-hydrator/categories-hydrator.service';

@Module({
  providers: [CategoriesService, CategoriesHydratorService],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
