import { DataTypes } from "sequelize";
import sequelize from "../../database";

const Categories = sequelize.define(
  "Categories",
  {
    CategoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

export default Categories;
