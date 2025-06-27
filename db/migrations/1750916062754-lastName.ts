import { MigrationInterface, QueryRunner } from "typeorm";

export class LastName1750916062754 implements MigrationInterface {
    name = 'LastName1750916062754'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "lname" TO "lastname"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "lastname" TO "lname"`);
    }

}
