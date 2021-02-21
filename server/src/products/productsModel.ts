import { DataTypes } from "sequelize";
import sequelize from "../../database";
import Images from "../images/imagesModel";
import Categories from "../categories/categoriesModel";

const Products = sequelize.define(
  "Products",
  {
    ProductId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
    },
    CategoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Products.hasMany(Images, {
  foreignKey: "ProductId",
  onDelete: "CASCADE",
  constraints: false,
});
Products.hasMany(Categories, {
  sourceKey: "CategoryId",
  foreignKey: "CategoryId",
  onDelete: "NO ACTION",
  constraints: false,
});

export default Products;
