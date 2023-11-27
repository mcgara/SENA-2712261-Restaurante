import { onceCallback } from '../utils.js';
import * as models from './models.js';
import useDefaultConnection from '../connection.js'
import createUser from './User.js';
import createFood from './Food.js';
import createFoodCategory from './FoodCategory.js';
import createOrder from './Order.js';
import createInvoice from './Invoice.js';

export const modelsFile = models.modelsFile;
export const modelsFilePath = models.modelsFilePath;
export const createModelsConnection = models.createModelsConnection;
export const createUserModel = createUser;
export const createFoodModel = createFood;
export const createFoodCategoryModel = createFoodCategory;
export const createOrderModel = createOrder;
export const createInvoiceModel = createInvoice;

export const useModelsConnection = onceCallback(() => createModelsConnection(useDefaultConnection()));
export const useUserModel = onceCallback(() => createUser(useModelsConnection()));
export const useFoodModel = onceCallback(() => createFood(useModelsConnection()));
export const useFoodCategoryModel = onceCallback(() => createFoodCategory(useModelsConnection()));
export const useOrderModel = onceCallback(() => createOrder(useModelsConnection()));
export const useInvoiceModel = onceCallback(() => createInvoice(useModelsConnection()));

export default {
  file: modelsFile,
  filePath: modelsFilePath,
  createConnection: createModelsConnection,
  createUser,
  createFood,
  createFoodCategory,
  createOrder,
  createInvoice,
  
  useConnection: useModelsConnection,
  useUser: useUserModel,
  useFood: useFoodModel,
  useFoodCategory: useFoodCategoryModel,
  useOrder: useOrderModel,
  useInvoice: useInvoiceModel
}
