import { Request, Response } from "express";
import Categories from "../categories/categoriesModel";
import Images from "../images/imagesModel";
import products from "./productsModel";
import productsView from "./productsView";

export default {
  async getProducts(req: Request, res: Response) {
    const product = (await products.findAll({
      include: [
        {
          model: Images,
        },
        {
          model: Categories,
        }
      ],
    })) as any;

    const data = productsView.renderMany(product);

    res.status(200).json(data);
  },

  async createProducts(req: Request, res: Response) {
    const { Name, Description, CategoryId } = req.body;

    const product = (await products.create({
      Name: Name,
      Description: Description,
      CategoryId: CategoryId,
    })) as any;

    res.status(201).json(productsView.render(product));
  },
};
