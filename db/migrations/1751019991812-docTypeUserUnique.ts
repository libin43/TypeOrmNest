import { MigrationInterface, QueryRunner } from "typeorm";

export class DocTypeUserUnique1751019991812 implements MigrationInterface {
    name = 'DocTypeUserUnique1751019991812'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "document" ADD CONSTRAINT "UQ_b0bdb2c62e17cd66f89630f3612" UNIQUE ("userId", "doc_type")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "document" DROP CONSTRAINT "UQ_b0bdb2c62e17cd66f89630f3612"`);
    }

}
