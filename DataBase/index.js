import models from './models/index.js';
import utils, { useLogger } from './utils.js';

/** @param {import('./common.js').Connection} connection */
export async function runDataBase (connection) {
  const logger = useLogger();

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
  ...models,
  utils,
  runDataBase
}
