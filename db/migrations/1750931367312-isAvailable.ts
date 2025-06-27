import { MigrationInterface, QueryRunner } from "typeorm";

export class IsAvailable1750931367312 implements MigrationInterface {
    name = 'IsAvailable1750931367312'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "is_available" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "is_available"`);
    }

}
