import { URL } from 'node:url';
import * as app from './app.js';
import * as appConfig from './app.config.js';
import * as routes from './routes/index.js';
import * as defaultBackEnd from './default.js';
import database from './database.js';
import utils, { logger } from './utils.js';

/**
 * @param {import('express').Express} app
 * @param {import('./app.config').AppConfig} config
 */
export function runBackEnd(app, config) {
  let url = new URL(`http://${config.host}:${config.port}`);
  app.listen(config.port, config.host, () => {
    logger.log.notice('%s: server listen on ' + url.href, 'BACKEND')
  });

  return app;
};

export default {
  app,
  appConfig,
  routes,
  database,
  defaultBackEnd,
  utils,
  runBackEnd
}
