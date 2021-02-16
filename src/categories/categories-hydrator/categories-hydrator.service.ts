import { Injectable } from '@nestjs/common';
import { Category as CategoryDto } from 'src/models/dto/category.dto';
import { Category } from 'src/models/category.entity';

@Injectable()
export class CategoriesHydratorService {
    hydrateCategoryDtoFromCategory(category: Category): CategoryDto {
        const categoryDto = new CategoryDto();
        categoryDto.code = category.code;
        categoryDto.id = category.id;
        categoryDto.name = category.name;
        categoryDto.parentId = category.parentCategoryId;

        return categoryDto;
    }

    hydrateCategoriesDtoFromCategories(categories: Category[]): CategoryDto[] {
        const categoriesDto = [];

        categories.forEach(function (category) {
            const categoryDto = new CategoryDto();
            categoryDto.code = category.code;
            categoryDto.id = category.id;
            categoryDto.name = category.name;
            categoryDto.parentId = category.parentCategoryId;

            categoriesDto.push(categoryDto);
        });

        return categoriesDto;
    }
}
