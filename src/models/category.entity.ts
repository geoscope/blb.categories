import { Column, Entity } from 'typeorm';
import { BlbBaseEntity } from './blbbaseentity';

@Entity({ name: 'categories' })
export class Category extends BlbBaseEntity {
    @Column('varchar', { length: 25, nullable: true })
    code: string;

    @Column('varchar', { length: 100, nullable: false })
    name: string;

    @Column({ type: 'uuid', nullable: true })
    parentCategoryId?: string;
}
