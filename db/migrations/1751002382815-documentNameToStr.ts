import { MigrationInterface, QueryRunner } from "typeorm";

export class DocumentNameToStr1751002382815 implements MigrationInterface {
    name = 'DocumentNameToStr1751002382815'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "document" DROP COLUMN "doc_name"`);
        await queryRunner.query(`ALTER TABLE "document" ADD "doc_name" character varying`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "is_available"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "is_available" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "is_available"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "is_available" integer NOT NULL DEFAULT '1'`);
        await queryRunner.query(`ALTER TABLE "document" DROP COLUMN "doc_name"`);
        await queryRunner.query(`ALTER TABLE "document" ADD "doc_name" integer`);
    }

}
