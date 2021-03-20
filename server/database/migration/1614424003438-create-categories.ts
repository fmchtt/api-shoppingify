import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createCategories1614424003438 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "Categories",
        columns: [
          {
            name: "CategoryId",
            type: "int",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "Name",
            type: "varchar(25)",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
