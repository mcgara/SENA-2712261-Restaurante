import { readFile } from 'node:fs/promises';
import { joinWithRoot, useLogger } from '../utils.js';

/**
 * @typedef {import('../common').Connection} Connection
 */

const logger = useLogger();
export const modelsFilePath = joinWithRoot('models/models.sql');
export const modelsFile = readFile(modelsFilePath, { encoding: 'utf-8' });

/** @param {Promise<Connection>} connection */
export async function createModelsConnection(connection) {
  /** @type {string | null} */
  let script = null;

  try {
    script = await modelsFile;
  } catch (err) {
    logger.log.error('DATABASE: ', err.message ?? 'error on load models file.');
  }
  
  let modelsConnection = null;
  if (script === null) return modelsConnection;
  
  try {
    const queries = script.trim().split(';').map(query => query.trim());
    modelsConnection = await connection;
    for (const query of queries) {
      if (!query) continue;
      await modelsConnection.query(query);
    }
    logger.log.notice('%s: successful query of models file.', 'DATABASE');
  } catch (err) {
    logger.log.error(`DATABASE: ', '${err.message ?? 'error execute models file.'}`, err.code ?? '');
    modelsConnection = null;
  }

  return modelsConnection;
}

/** @typedef {ReturnType<createModelsConnection>} ModelsConnection */

export default createModelsConnection;
