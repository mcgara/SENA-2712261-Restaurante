import { onceCallback } from './utils.js';
import { useDotenv } from './utils.node.js';
import { appConfig, appConfigApi } from './app.config.js';
import { appArgv, runFrontEnd } from './run.js';

export const useAppConfig = onceCallback(appConfig);
export const useAppConfigApi = onceCallback(appConfigApi);
export const useAppArgv = onceCallback(() => appArgv(useAppConfig()));
export const useFrontEnd = onceCallback(() => {
  useDotenv();
  return runFrontEnd(useAppArgv(), useAppConfig(), useAppConfigApi());
});
