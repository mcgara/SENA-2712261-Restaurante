import CommonRouter from './common.js';

/** 
 * @typedef {import('express').Router} Router
 * @typedef {import('./types').IRouteModel} IRouteModel
 */

/** @extends {CommonRouter<'/user'>} */
export class UserRoute extends CommonRouter {
  /**
   * @param {Router} router
   * @param {IRouteModel['/user']} model
   */
  constructor(router, model) {
    super(router, '/user', model);
  }
}

/** @extends {CommonRouter<'/food'>} */
export class FoodRoute extends CommonRouter {
  /**
   * @param {Router} router
   * @param {IRouteModel['/food']} model
   */
  constructor(router, model) {
    super(router, '/food', model);
  }
}

/** @extends {CommonRouter<'/food_category'>} */
export class FoodCategoryRoute extends CommonRouter {
  /**
   * @param {Router} router
   * @param {IRouteModel['/food_category']} model
   */
  constructor(router, model) {
    super(router, '/food_category', model);
  }
}

/** @extends {CommonRouter<'/order'>} */
export class OrderRoute extends CommonRouter {
  /**
   * @param {Router} router
   * @param {IRouteModel['/order']} model
   */
  constructor(router, model) {
    super(router, '/order', model);
  }
}

/** @extends {CommonRouter<'/invoice'>} */
export class InvoiceRoute extends CommonRouter {
  /**
   * @param {Router} router
   * @param {IRouteModel['/invoice']} model
   */
  constructor(router, model) {
    super(router, '/invoice', model);
  }
}
