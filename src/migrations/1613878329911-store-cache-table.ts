import { MigrationInterface, QueryRunner } from 'typeorm';

export class storeCacheTable1613878329911 implements MigrationInterface {
    name = 'storeCacheTable1613878329911';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            'CREATE TABLE "cache"."stores" ("id" uuid NOT NULL, "createdAt" TIMESTAMP NOT NULL, "createdBy" uuid NOT NULL, "isEnabled" boolean NOT NULL DEFAULT true, "isDeleted" boolean NOT NULL DEFAULT false, "code" character varying(25), "name" character varying(255) NOT NULL, CONSTRAINT "PK_ba198ec19f1b0fea621d64dc692" PRIMARY KEY ("id"))',
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE "cache"."stores"');
    }
}
