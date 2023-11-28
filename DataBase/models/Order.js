import * as common from './common.js';

/**
 * @typedef {import('./models.js').ModelsConnection} ModelsConnection
 * @typedef {import('./types.js').OrderID} OrderID
 * @typedef {import('./types.js').Order} Order
 */

/**
 * @param {ModelsConnection} connection
 * @param {Order} fieldsOrder
 */
export async function OrderFind(connection, fieldsOrder) {
  return await common.find(connection, 'order', fieldsOrder);
}

/**
 * @param {ModelsConnection} connection
 * @param {OrderID} id
 */
export async function OrderFindById(connection, id) {
  return await common.findById(connection, 'order', id);
}

/**
 * @param {ModelsConnection} connection
 * @param {Order | Order[]} fieldsOrder
 * @function
 */
export async function OrderCreate(connection, fieldsOrder) {
  return await common.create(connection, 'order', fieldsOrder);
}

/** @param {ModelsConnection} connection */
export function createOrderModel(connection) {
  return {
    /** @param {Order} fieldsOrder */
    find: fieldsOrder => OrderFind(connection, fieldsOrder),
    /** @param {OrderID} id */
    findById: id => OrderFindById(connection, id),
    /** @param {Order | Order[]} fieldsOrder */
    create: fieldsOrder => OrderCreate(connection, fieldsOrder),
  };
}

export default createOrderModel;
