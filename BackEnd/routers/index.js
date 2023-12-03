import * as common from './common.js';
import * as routers from './routers.js';

export const commonRoutes = common;

export const {
  UserRouter,
  FoodRouter,
  FoodCategoryRouter,
  OrderRouter,
  InvoiceRouter
} = routers;
