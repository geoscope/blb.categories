import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class BlbBaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'uuid', nullable: false })
    storeId: string;

    @Column({ type: 'timestamp', nullable: false })
    createdAt: Date;

    @Column({ type: 'uuid', nullable: false })
    createdBy: string;

    @Column({ type: 'timestamp', nullable: false })
    modifiedAt: Date;

    @Column({ type: 'uuid', nullable: false })
    modifiedBy: string;

    @Column({ default: true, nullable: false })
    isEnabled: boolean;

    @Column({ default: false, nullable: false })
    isDeleted: boolean;
}
