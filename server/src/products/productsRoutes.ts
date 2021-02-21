import { Router } from "express";
import multer from "multer";
import multerConfig from "../../config/muterconfig";
import productsController from "./productsController";

const routes = Router();

routes.get("/", productsController.getProducts);
routes.post(
  "/",
  multerConfig.array("images"),
  productsController.createProducts
);
routes.put("/:id", productsController.updateProduct);
routes.delete("/:id", productsController.deleteProducts);

export default routes;
