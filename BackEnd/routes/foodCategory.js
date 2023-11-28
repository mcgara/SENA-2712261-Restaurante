import { Router } from 'express';
import { onceCallback } from '../utils.js';
import { useFoodCategoryModel as FoodCategory } from '../database.js';

const useFoodCategoryRoute = onceCallback(() => {
  const router = Router();

  router.get('/', async (req, res) => {
    res.json(await FoodCategory().find(req.query));
  });

  router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    let response = await FoodCategory().findById(id);
    response ?? { message: 'food category not found with id: ' + id, status: 1 };
    res.json(response);
  });

  router.post('/', async (req, res) => {
    let response = { message: 'successfully created food categories', status: 0 };
    try { await FoodCategory().create(req.body); }
    catch { response = { message: 'error to create food categories', status: 1 } }
    res.json(response);
  });

  return router;
});

export default useFoodCategoryRoute;
