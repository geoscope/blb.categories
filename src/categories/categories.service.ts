import { Injectable } from '@nestjs/common';
import { Category } from 'src/models/dto/category.dto';

@Injectable()
export class CategoriesService {
    async GetCategoryById(id: number): Promise<Category> {
        const category = new Category();
        category.id = 1;
        category.code = 'ABC';
        category.name = 'Category ABC';
        category.parentId = null;

        return category;
    }
}
