import { Request, Response } from "express";
import Categories from "./categoriesModel";
import categoriesView from "./categoriesView";

export default {
  async getCategories(req: Request, res: Response) {
    const resposta = (await Categories.findAll()) as any;
    res.status(200).json(categoriesView.renderMany(resposta));
  },

  async createCategory(req: Request, res: Response) {
    const { Name } = req.body;

    const Category = (await Categories.create({
      Name: Name,
    })) as any;

    res.status(201).json(categoriesView.render(Category));
  },

  async deleteCategory(req: Request, res: Response) {
    const CategoryId = req.params.id;

    Categories.destroy({ where: { CategoryId: CategoryId } });

    res.status(202).json({
      Message: "Categoria Deletada",
    });
  },
};
