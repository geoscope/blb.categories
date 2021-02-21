import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'stores', schema: 'cache' })
export class Store {
    @PrimaryColumn({ type: 'uuid' })
    id: string;

    @Column({ type: 'timestamp', nullable: false })
    createdAt: Date;

    @Column({ type: 'uuid', nullable: false })
    createdBy: string;

    @Column({ default: true, nullable: false })
    isEnabled: boolean;

    @Column({ default: false, nullable: false })
    isDeleted: boolean;

    @Column('varchar', { length: 25, nullable: true })
    code: string;

    @Column('varchar', { length: 255, nullable: false })
    name: string;
}
