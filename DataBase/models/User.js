import * as common from '../common.js'
import { useLogger } from '../utils.js';

const logger = useLogger();

/**
 * @typedef {import('./models.js').ModelsConnection} ModelsConnection
 * @typedef {import('./types.js').TableNames['User']} TableNameUser
 * @typedef {import('./types.js').UserID} UserID
 * @typedef {import('./types.js').User} User
 */

/** @type {TableNameUser} */
export const tableNameUser = 'user'

/**
 * @param {ModelsConnection} connection
 * @param {User} fieldsUser
 */
export async function UserFind(connection, fieldsUser) {
  const db = await connection;
  if (!db) return null; // TODO: Handle bad connection

  /** @type {User[]} */
  let users = [];

  try {
    users = await common.find(db, tableNameUser, fieldsUser)
  } catch (err) {
    logger.log.error('DATABASE: ', err.message);
  }
  return users;
}

/**
 * @param {ModelsConnection} connection
 * @param {UserID} id
 */
export async function UserFindById(connection, id) {
  const db = await connection;
  if (!db) return null;

  /** @type {User | null} */
  let user = null;

  try {
    const result = await common.findById(db, tableNameUser, id)
    if (result.length > 0) user = result[0];
  } catch (err) {
    logger.log.error('DATABASE: ', err.message);
  }
  return user;
}

/**
 * @param {ModelsConnection} connection
 * @param {User | User[]} fieldsUser
 */
export async function UserCreate(connection, fieldsUser) {
  const db = await connection;
  if (!db) return null;

  try {
    await common.create(db, tableNameUser, fieldsUser)
    // Handle result if is correct or error
  } catch (err) {
    logger.log.error('DATABASE: ', err.message);
  }
  return null; // TODO: What returns???
}

/** @param {ModelsConnection} connection */
export function createUserModel(connection) {
  return {
    /** @param {User} fieldsUser */
    find: fieldsUser => UserFind(connection, fieldsUser),
    /** @param {UserID} id */
    findById: id => UserFindById(connection, id),
    /** @param {User | User[]} fieldsUser */
    create: fieldsUser => UserCreate(connection, fieldsUser)
  }
}

export default createUserModel;
