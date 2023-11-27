import common from './common.js';

/**
 * @typedef {import('./models.js').ModelsConnection} ModelsConnection
 * @typedef {import('./types.js').FoodID} FoodID
 * @typedef {import('./types.js').Food} Food
 */

/**
 * @param {ModelsConnection} connection
 * @param {Food} fieldsFood
 */
export async function FoodFind(connection, fieldsFood) {
  return await common.find(connection, 'food', fieldsFood);
}

/**
 * @param {ModelsConnection} connection
 * @param {FoodID} id
 */
export async function FoodFindById(connection, id) {
  return await common.findById(connection, 'food', id);
}

/**
 * @param {ModelsConnection} connection
 * @param {Food | Food[]} fieldsFood
 * @function
 */
export async function FoodCreate(connection, fieldsFood) {
  return await common.create(connection, 'food', fieldsFood);
}

/** @param {ModelsConnection} connection */
export function createFoodModel(connection) {
  return {
    /** @param {Food} fieldsFood */
    find: fieldsFood => FoodFind(connection, fieldsFood),
    /** @param {FoodID} id */
    findById: id => FoodFindById(connection, id),
    /** @param {Food | Food[]} fieldsFood */
    create: fieldsFood => FoodCreate(connection, fieldsFood),
  };
}

export default createFoodModel;
