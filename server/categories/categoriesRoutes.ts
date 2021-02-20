import { Router } from 'express'
import categoriesController from './categoriesController'

const routes = Router();

routes.get('/', categoriesController.getCategories);

export default routes;
