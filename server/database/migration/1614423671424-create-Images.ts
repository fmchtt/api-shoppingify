import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createImages1614423671424 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Images",
        columns: [
          {
            name: "ImageId",
            type: "int",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "Path",
            type: "text",
          },
          {
            name: "ProductId",
            type: "int",
          },
        ],
        foreignKeys: [
          {
            name: "FK_imageProducts",
            columnNames: ["ProductId"],
            referencedTableName: "Products",
            referencedColumnNames: ["ProductId"]
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("Images");
  }
}
