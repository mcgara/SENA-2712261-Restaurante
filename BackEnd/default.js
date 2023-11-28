import { onceCallback, useDotenv } from './utils.js';
import createApp from './app.js';
import createAppConfig from './app.config.js';
import { runBackEnd } from './index.js';

export const useApp = onceCallback(() => createApp());
export const useAppConfig = onceCallback(() => createAppConfig());

export const useBackEnd = onceCallback(() => {
  useDotenv();
  return runBackEnd(useApp(), useAppConfig());
})
