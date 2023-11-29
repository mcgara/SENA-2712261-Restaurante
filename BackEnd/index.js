import * as appLib from './app.js';
import * as appConfigLib from './app.config.js';
import * as routesLib from './routes/index.js';
import * as defaultBackEndLib from './default.js';
import databaseLib from './database.js';
import utilsLib from './utils.js';
import runBackEndLib from './run.js';

export const app = appLib;
export const appConfig = appConfigLib;
export const routes = routesLib;
export const defaultBackEnd = defaultBackEndLib;
export const database = databaseLib;
export const utils = utilsLib;
export const runBackEnd = runBackEndLib;

export default {
  app,
  appConfig,
  routes,
  database,
  defaultBackEnd,
  utils,
  runBackEnd
}
