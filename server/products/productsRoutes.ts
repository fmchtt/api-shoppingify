import { Router } from "express";
import productsController from "./productsController";

const routes = Router();

routes.get("/", productsController.getProducts);
routes.post("/", productsController.createProducts);

export default routes;
