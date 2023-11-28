import { onceCallback, useDotenv } from './utils.js';
import createConnection from './connection.js';
import createConnectionConfig from './connection.config.js';
import models from './models/index.js';
import { runDataBase } from './index.js';

export const useConnectionConfig = onceCallback(() => createConnectionConfig());
export const useConnection = onceCallback(() => createConnection(useConnectionConfig()));

export const useModelsConnection = onceCallback(() => models.createConnection(useConnection()));
export const useUserModel = onceCallback(() => models.createUser(useModelsConnection()));
export const useFoodModel = onceCallback(() => models.createFood(useModelsConnection()));
export const useFoodCategoryModel = onceCallback(() => models.createFoodCategory(useModelsConnection()));
export const useOrderModel = onceCallback(() => models.createOrder(useModelsConnection()));
export const useInvoiceModel = onceCallback(() => models.createInvoice(useModelsConnection()));

export const useDataBase = onceCallback(async () => {
  useDotenv();
  return await runDataBase(await useModelsConnection());
});
