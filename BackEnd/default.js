import { onceCallback, useDotenv } from './utils.js';
import createApp from './app.js';
import createAppConfig from './app.config.js';
import { runBackEnd } from './index.js';

import * as routes from './routes/index.js';

export const useApp = onceCallback(() => createApp());
export const useAppConfig = onceCallback(() => createAppConfig());

export const {
  useUserRoute,
  useFoodRoute,
  useFoodCategoryRoute,
  useInvoiceRoute,
  useOrderRoute,
  useAppRoutes  
} = routes;

export const useBackEnd = onceCallback(() => {
  useDotenv();
  useAppRoutes(useApp());
  return runBackEnd(useApp(), useAppConfig());
})
