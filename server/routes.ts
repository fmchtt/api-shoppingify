import { Router } from 'express';
import categoryRoutes from './categories/categoriesRoutes'
import productsRoutes from './products/productsRoutes'

const routes = Router();

routes.use('/api/v1/categories', categoryRoutes);
routes.use('/api/v1/products', productsRoutes);

export default routes;
