import { Controller, Get, Param } from '@nestjs/common';
import { Category } from 'src/models/dto/category.dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {}

    @Get()
    async getCategoriesByHierarchy(): Promise<Category[]> {
        return null;
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Category> {
        return this.categoriesService.GetCategoryById(id);
    }
}
