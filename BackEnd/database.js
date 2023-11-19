import DB, { useDataBase as useDB } from '../DataBase/index.js';

export const useDataBase = useDB
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

  useConnection,
  useUser,
  useFood,
  useFoodCategory,
  useInvoice,
  useOrder
} = DB;

export default DB;
