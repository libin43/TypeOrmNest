import { MigrationInterface, QueryRunner } from "typeorm";

export class SecondMig1750846870976 implements MigrationInterface {
    name = 'SecondMig1750846870976'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "fname" TO "firstname"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "firstname" TO "fname"`);
    }

}
