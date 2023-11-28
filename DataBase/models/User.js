import * as common from './common.js';

/**
 * @typedef {import('./models.js').ModelsConnection} ModelsConnection
 * @typedef {import('./types.js').UserID} UserID
 * @typedef {import('./types.js').User} User
 */

/**
 * @param {ModelsConnection} connection
 * @param {User} fieldsUser
 */
export async function UserFind(connection, fieldsUser) {
  return await common.find(connection, 'user', fieldsUser);
}

/**
 * @param {ModelsConnection} connection
 * @param {UserID} id
 */
export async function UserFindById(connection, id) {
  return await common.findById(connection, 'user', id);
}

/**
 * @param {ModelsConnection} connection
 * @param {User | User[]} fieldsUser
 * @function
 */
export async function UserCreate(connection, fieldsUser) {
  return await common.create(connection, 'user', fieldsUser);
}

/** @param {ModelsConnection} connection */
export function createUserModel(connection) {
  return {
    /** @param {User} fieldsUser */
    find: (fieldsUser) => UserFind(connection, fieldsUser),
    /** @param {UserID} id */
    findById: (id) => UserFindById(connection, id),
    /** @param {User | User[]} fieldsUser */
    create: (fieldsUser) => UserCreate(connection, fieldsUser),
  };
}

export default createUserModel;
