import DB, { useDataBase as useDB } from '../DataBase/index.js';

export const useDataBase = useDB
export const {
  file,
  filePath,
  createConnection,
  createUser,
  useConnection,
  useUser,
  utils,
} = DB;

export default DB;
