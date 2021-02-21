import { DataTypes } from 'sequelize';
import sequelize from '../../database'

const Images = sequelize.define("Images", {
  ImagesID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Path: {
    type: DataTypes.STRING
  },
  ProductId: {
    type: DataTypes.INTEGER
  }
}, {
  timestamps: false
})

export default Images;
