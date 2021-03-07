import { MigrationInterface, QueryRunner } from 'typeorm';

export class InitialMigration1613390545395 implements MigrationInterface {
    name = 'InitialMigration1613390545395';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "storeId" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL, "createdBy" uuid NOT NULL, "modifiedAt" TIMESTAMP NOT NULL, "modifiedBy" uuid NOT NULL, "isEnabled" boolean NOT NULL DEFAULT true, "isDeleted" boolean NOT NULL DEFAULT false, "code" character varying(25), "name" character varying(100) NOT NULL, "parentCategoryId" uuid, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE "categories"');
    }
}
