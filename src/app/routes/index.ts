import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import productRouter from '../modules/product/product.route';
import { orderRoutes } from '../modules/order/order.route';


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
  {
    path: '/orders',
    route: orderRoutes,
  },
  
 
  
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;