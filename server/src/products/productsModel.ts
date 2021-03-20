import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import Categories from "../categories/categoriesModel";
import Images from "../images/imagesModel";

@Entity("Products")
export default class Products {
  @PrimaryGeneratedColumn("increment")
  Id: number;

  @Column()
  Name: string;

  @Column()
  Description: string;

  @ManyToOne(() => Categories, (Categories) => Categories.product, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "product_id" })
  category: Categories;

  @OneToMany(() => Images, (Images) => Images.product, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "Product_id" })
  Images: Images[];
}
