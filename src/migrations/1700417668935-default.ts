import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1700417668935 implements MigrationInterface {
    name = 'Default1700417668935'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "numbers" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "value" integer NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "numbers"`);
    }

}
