import {MigrationInterface, QueryRunner} from "typeorm";

export class modifyTeacher1654887374558 implements MigrationInterface {
    name = 'modifyTeacher1654887374558'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teacher" ADD "age1" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teacher" DROP COLUMN "age1"`);
    }

}
