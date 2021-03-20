import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";

import Products from "../products/productsModel";

@Entity("Images")
export default class Images {
  @PrimaryGeneratedColumn("increment")
  Id: number;

  @Column()
  Path: string;

  @ManyToOne(() => Products, (Products) => Products.Images)
  @JoinColumn({ name: "Product_id" })
  product: Products;
}
