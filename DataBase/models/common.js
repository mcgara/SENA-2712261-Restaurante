import * as common from '../common.js'
import { useLogger } from '../utils.js';

/**
 * @typedef {import('./models.js').ModelsConnection} ModelsConnection
 * @typedef {import('./types.js').TableNames} TableNames
 * @typedef {import('./types.js').TableNamesID} TableNamesID
 * @typedef {{ [P in keyof TableNames]: P }[keyof TableNames]} AllTableNames
 */

/**
 * @template T
 * @template [U=undefined]
 * @param {() => Promise<T>} callback
 * @param {U} [defaultValue]
 * @return {Promise<T | U>}
 */
export async function Execute(callback, defaultValue) {
  const logger = useLogger();
  let value = defaultValue;
  
  try {
    value = await callback();
  } catch (err) {
    logger.log.error('DATABASE: ', err.message ?? '\ntraceback: ' + err);
    throw err;
  }
  return value;
}

/**
 * @template {AllTableNames} T
 * @param {ModelsConnection} connection
 * @param {T} tableName
 * @param {Partial<TableNames[T]>} fields
 * @return {Promise<TableNames[T][]>}
 */
export function find(connection, tableName, fields) {
  return Execute(async () => await common.find
    (await connection, tableName, fields), []
  );
}

/**
 * @template {AllTableNames} T
 * @param {ModelsConnection} connection
 * @param {T} tableName
 * @param {TableNamesID[T]} id
 * @return {Promise<TableNames[T][]>}
 */
export function findById(connection, tableName, id) {
  return Execute(async () => await common.findById
    (await connection, tableName, id), []
  );
}

/**
 * @template {AllTableNames} T
 * @param {ModelsConnection} connection
 * @param {T} tableName
 * @param {TableNames[T] | TableNames[T][]} fields
 */
export function create(connection, tableName, fields) {
  return Execute(async () => await common.create
    (await connection, tableName, fields), [[], {}]
  );
}

/**
 * @template {AllTableNames} T
 * @param {ModelsConnection} connection
 * @param {T} tableName
 * @param {TableNames[T] | TableNames[T][]} fields
 */
export function Common(connection, tableName) {
  return {
    /** @param {Parameters<find>['2']} fields */
    find: fields => find(connection, tableName, fields),
    /**
     * @param {Parameters<findByPk>['2']} pkName
     * @param {Parameters<findByPk>['3']} pkValue
    */
    findByPk: (pkName, pkValue) => findByPk(connection, tableName, pkName, pkValue),
    /** @param {Parameters<findById>['2']} id */
    findById: id => findById(connection, tableName, id),
    /** @param {Parameters<create>['2']} fields */
    create: fields => create(connection, tableName, fields),
  }
}

export default Common;
