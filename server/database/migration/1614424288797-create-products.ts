import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createProducts1614424288797 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createTable(
      new Table({
        name: "Products",
        columns: [
          {
            name: "ProductId",
            type: "int",
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "Name",
            type: "varchar(50)",
          },
          {
            name: "Description",
            type: "varchar(100)",
          },
          {
            name: "Category_id",
            type: "int",
          },
        ],
        foreignKeys: [{
            name: 'productCategory',
            columnNames: ['Category_id'],
            referencedTableName: 'Categories',
            referencedColumnNames: ['CategoryId'],
            onUpdate: "NO ACTION",
            onDelete: "NO ACTION"
        }]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable("Products");
  }
}
