import { readFile } from 'node:fs/promises';
import { joinWithRoot, useLogger } from '../utils.js';

/**
 * @typedef {import('../common').Connection} Connection
 */

export const modelsFilePath = joinWithRoot('models/models.sql');
export const modelsFile = readFile(modelsFilePath, { encoding: 'utf-8' });

/** @param {Promise<Connection>} connection */
export async function createModelsConnection(connection) {
  const logger = useLogger();
  
  /** @type {string | null} */
  let script = null;

  try {
    script = await modelsFile;
  } catch (err) {
    logger.log.error('DATABASE: ', err.message ?? 'error on load models file.');
  }
  
  if (script === null) return connection;
  
  try {
    const queries = script.trim().split(';').map(query => query.trim());
    const modelsConnection = await connection;
    for (const query of queries) {
      if (!query) continue;
      await modelsConnection.query(query);
    }
    logger.log.notice('%s: successful queries of models file script.', 'DATABASE');
  } catch (err) {
    logger.log.error(`DATABASE: ', '${err.message ?? 'error execute models file script.'}`, err.code ?? '');
  }

  return connection;
}

/** @typedef {ReturnType<createModelsConnection>} ModelsConnection */

export default createModelsConnection;
