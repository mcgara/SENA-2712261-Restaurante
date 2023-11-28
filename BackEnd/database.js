import database from '../DataBase/index.js';
import * as defaultDatabase from '../DataBase/default.js';

export const {
  file,
  filePath,
  utils,
  createConnection,
  createUser,
  createFood,
  createFoodCategory,
  createInvoice,
  createOrder,
  runDataBase
} = database;

export const {
  useConnection,
  useConnectionConfig,
  useModelsConnection,
  useUserModel,
  useFoodModel,
  useFoodCategoryModel,
  useOrderModel,
  useInvoiceModel,
  useDataBase
} = defaultDatabase;
