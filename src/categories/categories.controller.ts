import { Body, Controller, Delete, Get, Headers, Param, Post, Put } from '@nestjs/common';
import { Category } from '../models/dto/category.dto';
import { Category as CategoryDto } from '../models/dto/category.dto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
    constructor(private categoriesService: CategoriesService) {}

    @Get()
    async getCategories(@Headers('x-store-id') storeId: string): Promise<Category[]> {
        return this.categoriesService.GetCategoryTreeByParentId(storeId, null);
    }

    @Get(':id')
    async getCategory(@Headers('x-store-id') storeId: string, @Param('id') id: string): Promise<Category> {
        return this.categoriesService.GetCategoryById(storeId, id);
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
    async create(@Headers('x-store-id') storeId: string, @Body() categoryDto: CategoryDto): Promise<Category> {
        return this.categoriesService.CreateCategory(storeId, '20dff288-0086-4278-99ad-5e2bb7d0406c', categoryDto); // TODO: Remove hard coded user id
    }

    @Put()
    async update(@Headers('x-store-id') storeId: string, @Param('id') id: string, @Body() categoryDto: CategoryDto): Promise<CategoryDto> {
        // TODO: Do we need the id here from the route param?
        return this.categoriesService.UpdateCategory(storeId, '20dff288-0086-4278-99ad-5e2bb7d0406c', categoryDto); // TODO: Remove hard coded user id
    }

    @Delete(':id')
    async delete(@Headers('x-store-id') storeId: string, @Param('id') id: string): Promise<boolean> {
        return this.categoriesService.DeleteCategory(storeId, '20dff288-0086-4278-99ad-5e2bb7d0406c', id);
    }
}
