import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Category } from 'src/models/dto/category.dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {}

    @Get()
    async getCategories(): Promise<Category[]> {
        return null;
    }

    @Get(':id')
    async getCategory(@Param('id') id: string): Promise<Category> {
        return this.categoriesService.GetCategoryById(id);
    }

    @Get(':id/children')
    async getCategoryWithChildren(): Promise<Category[]> {
        return null;
    }

    @Get(':id/ancestors')
    async getCategoryWithParents(): Promise<Category[]> {
        return null;
    }

    @Post()
    async create(): Promise<Category> {
        return null;
    }

    @Put()
    async updateOrCreate(): Promise<Category> {
        return null;
    }

    @Delete(':id')
    async delete(): Promise<boolean> {
        return true;
    }
}
