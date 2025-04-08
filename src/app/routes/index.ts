import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route'
import productRouter from '../modules/product/product.route';
import { orderRoutes } from '../modules/order/order.route';
import  { ProductRoutes } from '../modules/product/product.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/products',
    route: ProductRouter,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },
  

 
  
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;