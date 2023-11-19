import User from './user.js';
import Food from './food.js';
import FoodCategory from './food_category.js';
import Order from './order.js';
import Invoice from './invoice.js';

export const useUserRoute = User;
export const useFoodRoute = Food;
export const useFoodCategoryRoute = FoodCategory;
export const useOrderRoute = Order;
export const useInvoiceRoute = Invoice;

export default {
  useUser: useUserRoute,
  useFood: useFoodRoute,
  useFoodCategory: useFoodCategoryRoute,
  useOrder: useOrderRoute,
  useInvoice: useInvoiceRoute
}
