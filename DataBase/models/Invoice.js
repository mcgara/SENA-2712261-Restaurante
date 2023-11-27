import common from './common.js';

/**
 * @typedef {import('./models.js').ModelsConnection} ModelsConnection
 * @typedef {import('./types.js').InvoiceID} InvoiceID
 * @typedef {import('./types.js').Invoice} Invoice
 */

/**
 * @param {ModelsConnection} connection
 * @param {Invoice} fieldsInvoice
 */
export async function InvoiceFind(connection, fieldsInvoice) {
  return await common.find(connection, 'invoice', fieldsInvoice);
}

/**
 * @param {ModelsConnection} connection
 * @param {InvoiceID} id
 */
export async function InvoiceFindById(connection, id) {
  return await common.findById(connection, 'invoice', id);
}

/**
 * @param {ModelsConnection} connection
 * @param {Invoice | Invoice[]} fieldsInvoice
 * @function
 */
export async function InvoiceCreate(connection, fieldsInvoice) {
  return await common.create(connection, 'invoice', fieldsInvoice);
}

/** @param {ModelsConnection} connection */
export function createInvoiceModel(connection) {
  return {
    /** @param {Invoice} fieldsInvoice */
    find: fieldsInvoice => InvoiceFind(connection, fieldsInvoice),
    /** @param {InvoiceID} id */
    findById: id => InvoiceFindById(connection, id),
    /** @param {Invoice | Invoice[]} fieldsInvoice */
    create: fieldsInvoice => InvoiceCreate(connection, fieldsInvoice),
  };
}

export default createInvoiceModel;
