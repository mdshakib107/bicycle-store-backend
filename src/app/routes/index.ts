import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import productRouter from '../modules/product/product.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/products',
    route: productRouter,
  },
 
  
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;