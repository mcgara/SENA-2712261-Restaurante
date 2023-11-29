import * as models from './models/index.js';
import * as connection from './connection.js';
import * as connectionConfig from './connection.config.js';
import * as defaultDataBase from './default.js';
import utils, { logger } from './utils.js';

/** @param {import('./common.js').Connection} connection */
export async function runDataBase (connection) {
  try {
    await connection.connect();
    logger.log.notice('%s', 'DATABASE: successful connection.');
  } catch (err) {
    logger.log.error('DATABASE: ', 'error CONNECT to database failed.\n\ntraceback: ' + err);
    throw err; // Exit to service
  }

  return connection;
}

export default {
  connection,
  connectionConfig,
  models,
  defaultDataBase,
  utils,
  runDataBase
}
