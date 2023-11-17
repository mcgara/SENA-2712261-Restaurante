import { onceCallback } from '../utils.js';
import * as models from './models.js';
import useDefaultConnection from '../connection.js'
import createUser from './User.js';

export const modelsFile = models.modelsFile;
export const modelsFilePath = models.modelsFilePath;
export const createModelsConnection = models.createModelsConnection;
export const createUserModel = createUser;

export const useModelsConnection = onceCallback(() => createModelsConnection(useDefaultConnection()));
export const useUserModel = onceCallback(() => createUser(useModelsConnection()))

export default {
  file: modelsFile,
  filePath: modelsFilePath,
  createConnection: createModelsConnection,
  createUser,
  
  useConnection: useModelsConnection,
  useUser: useUserModel
}
