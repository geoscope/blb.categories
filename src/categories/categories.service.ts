import { Injectable } from '@nestjs/common';
import { Category as CategoryDto } from '../models/dto/category.dto';
import { Category } from '../models/category.entity';
import { Connection, createConnection } from 'typeorm';
import { CategoriesHydratorService } from './categories-hydrator/categories-hydrator.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CategoriesService {
    connection: Connection;
    categoryHydrator: CategoriesHydratorService;

    constructor(categoryHydrator: CategoriesHydratorService) {
        this.categoryHydrator = categoryHydrator;

        createConnection()
            .then((con) => {
                this.connection = con;
            })
            .catch((err) => {
                console.log(`Connection error: ${JSON.stringify(err)}`);
            });
    }

    async GetCategoryById(storeId: string, categoryId: string): Promise<CategoryDto> {
        const categoryRecord = await this.connection
            .getRepository(Category)
            .createQueryBuilder()
            .where('Category.storeId = :storeId AND Category.id=:id', { storeId, id: categoryId })
            .getOne();

        return this.categoryHydrator.hydrateCategoryDtoFromCategory(categoryRecord);
    }

    async GetCategoryTreeByParentId(storeId: string, categoryId: string): Promise<CategoryDto[]> {
        const categories = await this.connection.query(
            `WITH RECURSIVE childcategories AS 
            (
                SELECT c1.id, c1."parentCategoryId", c1."name" FROM categories c1
                    WHERE c1.storeId = ?
                        AND c1.id = ?
                    UNION
                        SELECT c.id, c."parentCategoryId", c."name" FROM categories c
                        INNER JOIN childcategories c2 ON c2.id = c."parentCategoryId" 
            ) SELECT * FROM childcategories;`,
            [storeId, categoryId],
        );

        return this.categoryHydrator.hydrateCategoriesDtoFromCategories(categories);
    }

    async UpdateCategory(storeId: string, userId: string, categoryDto: CategoryDto): Promise<CategoryDto> {
        await this.connection
            .createQueryBuilder()
            .update(Category)
            .set({ code: categoryDto.code, name: categoryDto.name, parentCategoryId: categoryDto.parentId, modifiedAt: new Date(), modifiedBy: userId })
            .where('storeId = :storeId AND id=:id', { storeId, id: categoryDto.id })
            .execute();

        return categoryDto;
    }

    async CreateCategory(storeId: string, userId: string, categoryDto: CategoryDto): Promise<CategoryDto> {
        const currentDateTime = new Date();
        const category: Category = {
            id: uuidv4(),
            storeId: storeId,
            code: categoryDto.code,
            name: categoryDto.name,
            parentCategoryId: categoryDto.parentId,
            createdAt: currentDateTime,
            createdBy: userId,
            modifiedAt: currentDateTime,
            modifiedBy: userId,
            isEnabled: true,
            isDeleted: false,
        };
        const savedCategory = await this.connection.getRepository(Category).save(category);
        categoryDto.id = savedCategory.id;

        return categoryDto;
    }

    async DeleteCategory(storeId: string, userId: string, id: string): Promise<boolean> {
        await this.connection
            .createQueryBuilder()
            .update(Category)
            .set({ isDeleted: true, modifiedAt: new Date() })
            .where('storeId = :storeId AND id=:id', { storeId, id })
            .execute();

        return true;
    }
}
