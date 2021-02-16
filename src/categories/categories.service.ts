import { Injectable } from '@nestjs/common';
import { Category as CategoryDto } from 'src/models/dto/category.dto';
import { Category } from 'src/models/category.entity';
import { Connection, createConnection } from 'typeorm';
import { CategoriesHydratorService } from './categories-hydrator/categories-hydrator.service';

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

    async GetCategoryById(id: string): Promise<CategoryDto> {
        const categoryRecord = await this.connection.getRepository(Category).createQueryBuilder('c').where('c.id = :id', { id }).getOne();

        return this.categoryHydrator.hydrateCategoryDtoFromCategory(categoryRecord);
    }

    async GetCategoryTreeByParentId(id: string): Promise<CategoryDto[]> {
        const categories = await this.connection.query(
            `WITH RECURSIVE childcategories AS (SELECT c1.id, c1."parentCategoryId", c1."name" FROM categories c1
            WHERE c1.id = ?
            UNION
                SELECT c.id, c."parentCategoryId", c."name" FROM categories c
                INNER JOIN childcategories c2 ON c2.id = c."parentCategoryId" 
            ) SELECT * FROM childcategories;`,
            [id],
        );

        return this.categoryHydrator.hydrateCategoriesDtoFromCategories(categories);
    }
}
