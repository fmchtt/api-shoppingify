import { Request, Response } from "express";
import Categories from "../categories/categoriesModel";
import imagesController from "../images/imagesController";
import Images from "../images/imagesModel";
import Products from "./productsModel";
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
        },
      ],
    })) as any;

    const data = productsView.renderMany(product);

    res.status(200).json(data);
  },

  async createProducts(req: Request, res: Response) {
    const { Name, Description, CategoryId } = req.body;
    const images = req.files as Express.Multer.File[];
    console.log(images[0].filename);

    const product = (await products.create({
      Name: Name,
      Description: Description,
      CategoryId: CategoryId,
    })) as any;

    images.map(async (image) => {
      await imagesController.createImage(product.ProductId, image.filename);
    });

    res.status(201).json(product);
  },

  async updateProduct(req: Request, res: Response) {
    const ProductId = req.params.id;

    const { Name, Description, CategoryId } = req.body;

    await Products.update(
      {
        Name: Name,
        Description: Description,
        CategoryId: CategoryId,
      },
      { where: { ProductId: ProductId } }
    );

    res.status(202).json({
      Message: "Produto Atualizado!",
    });
  },

  async deleteProducts(req: Request, res: Response) {
    const ProductId = req.params.id;

    await Products.destroy({ where: { ProductId: ProductId } });

    res.status(202).json({ Message: "Produto Deletado" });
  },
};
