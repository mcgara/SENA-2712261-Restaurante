import { onceCallback } from '../utils.js';
import User from './user.js';
import Food from './food.js';
import FoodCategory from './foodCategory.js';
import Order from './order.js';
import Invoice from './invoice.js';

export const useUserRoute = User;
export const useFoodRoute = Food;
export const useFoodCategoryRoute = FoodCategory;
export const useOrderRoute = Order;
export const useInvoiceRoute = Invoice;

/** @type {(app: import('express').Express) => void} */
export const useAppRoutes = onceCallback(app => {
  app.use('/user', User());
  app.use('/food', Food());
  app.use('/food_category', FoodCategory());
  app.use('/order', Order());
  app.use('/invoice', Invoice());
});

export default useAppRoutes
