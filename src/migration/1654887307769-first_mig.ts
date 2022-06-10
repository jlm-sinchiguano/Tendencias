import {MigrationInterface, QueryRunner} from "typeorm";

export class firstMig1654887307769 implements MigrationInterface {
    name = 'firstMig1654887307769'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teacher" ADD "year" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "address" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "teacher" DROP COLUMN "year"`);
    }

}
