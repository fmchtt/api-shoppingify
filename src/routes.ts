import { Router } from 'express';
import categoriesController from './controllers/categoriesController';

const routes = Router();

routes.get('/api/v1/categories', categoriesController.getCategories);

export default routes;
