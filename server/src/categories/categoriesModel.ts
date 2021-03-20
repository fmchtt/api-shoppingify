import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import Products from "../products/productsModel";

@Entity("Categories")
export default class Categories {
  @PrimaryGeneratedColumn("increment")
  Id: number;

  @Column()
  Name: string;

  @OneToMany(() => Products, (Products) => Products.category)
  @JoinColumn({ name: "product_id" })
  product: Products;
}
