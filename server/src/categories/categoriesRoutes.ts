import { Router } from "express";
import categoriesController from "./categoriesController";

const routes = Router();

routes.get("/", categoriesController.getCategories);
routes.post("/", categoriesController.createCategory);
routes.delete("/:id", categoriesController.deleteCategory);

export default routes;
