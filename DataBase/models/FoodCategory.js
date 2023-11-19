import common from './common.js';

/**
 * @typedef {import('./models.js').ModelsConnection} ModelsConnection
 * @typedef {import('./types.js').FoodCategoryID} FoodCategoryID
 * @typedef {import('./types.js').FoodCategory} FoodCategory
 */

/**
 * @param {ModelsConnection} connection
 * @param {FoodCategory} fieldsFoodCategory
 */
export async function FoodCategoryFind(connection, fieldsFoodCategory) {
  return await common.find(connection, 'food_category', fieldsFoodCategory);
}

/**
 * @param {ModelsConnection} connection
 * @param {FoodCategoryID} id
 */
export async function FoodCategoryFindById(connection, id) {
  return await common.findById(connection, 'food_category', id);
}

/**
 * @param {ModelsConnection} connection
 * @param {FoodCategory | FoodCategory[]} fieldsFoodCategory
 * @function
 */
export async function FoodCategoryCreate(connection, fieldsFoodCategory) {
  return await common.create(connection, 'food_category', fieldsFoodCategory);
}

/** @param {ModelsConnection} connection */
export function createFoodCategoryModel(connection) {
  return {
    /** @param {FoodCategory} fieldsFoodCategory */
    find: fieldsFoodCategory => FoodCategoryFind(connection, fieldsFoodCategory),
    /** @param {FoodCategoryID} id */
    findById: id => FoodCategoryFindById(connection, id),
    /** @param {FoodCategory | FoodCategory[]} fieldsFoodCategory */
    create: fieldsFoodCategory => FoodCategoryCreate(connection, fieldsFoodCategory),
  };
}

export default createFoodCategoryModel;
