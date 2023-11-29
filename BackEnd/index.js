import * as app from './app.js';
import * as appConfig from './app.config.js';
import * as routes from './routes/index.js';
import * as defaultBackEnd from './default.js';
import database from './database.js';
import utils from './utils.js';
import runBackEnd from './run.js';

export default {
  app,
  appConfig,
  routes,
  database,
  defaultBackEnd,
  utils,
  runBackEnd
}
