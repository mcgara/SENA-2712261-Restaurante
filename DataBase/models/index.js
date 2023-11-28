import * as models from './models.js';
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

export default {
  file: modelsFile,
  filePath: modelsFilePath,
  createConnection: createModelsConnection,
  createUser,
  createFood,
  createFoodCategory,
  createOrder,
  createInvoice
}
