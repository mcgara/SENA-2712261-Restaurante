import * as common from '../common.js'
import { useLogger } from '../utils.js';

const logger = useLogger();

/**
 * @typedef {import('./models.js').ModelsConnection} ModelsConnection
 * @typedef {import('./types.js').TableNames} TableNames
 * @typedef {import('./types.js').TableNamesID} TableNamesID
 * @typedef {{ [P in keyof TableNames]: P }[keyof TableNames]} AllTableNames
 */

/**
 * @template {AllTableNames} T
 * @param {ModelsConnection} connection
 * @param {T} tableName
 * @param {TableNames[T]} fields
 */
export async function find(connection, tableName, fields) {
  const conn = await connection;
  if (!conn) return null; // TODO: Handle bad connection

  /** @type {typeof fields[]} */
  let result = [];

  try {
    result = await common.find(conn, tableName, fields)
  } catch (err) {
    logger.log.error('DATABASE: ', err.message);
  }
  return result;
}

/**
 * @template {AllTableNames} T
 * @param {ModelsConnection} connection
 * @param {T} tableName
 * @param {TableNamesID[T]} id
 */
export async function findById(connection, tableName, id) {
  const conn = await connection;
  if (!conn) return null;

  /** @type {TableNames[typeof tableName] | null} */
  let result = null;

  try {
    result = await common.findById(conn, tableName, id)
    if (result.length > 0) result = result[0];
  } catch (err) {
    logger.log.error('DATABASE: ', err.message);
  }
  return result;
}

/**
 * @template {AllTableNames} T
 * @param {ModelsConnection} connection
 * @param {T} tableName
 * @param {TableNames[T] | TableNames[T][]} fields
 */
export async function create(connection, tableName, fields) {
  const conn = await connection;
  if (!conn) return null;

  try {
    await common.create(conn, tableName, fields)
    // Handle result if is correct or error
  } catch (err) {
    logger.log.error('DATABASE: ', err.message);
  }
  return null; // TODO: What returns???
}

export default {
  find,
  findById,
  create
}
