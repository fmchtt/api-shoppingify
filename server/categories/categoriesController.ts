import { Request, Response } from "express";
import Categories from "./categoriesModel";

export default {
  async getCategories(req: Request, res: Response) {
    const resposta = await Categories.findAll();
    res.status(200).json(resposta);
  },
};
