import { Router } from 'express';
import { onceCallback } from '../utils.js';
import { useFoodCategory } from '../database.js';

const foodCategoryRoute = Router();

const useFoodCategoryRoute = onceCallback(() => {
  const FoodCategory = useFoodCategory();

  foodCategoryRoute.get('/', async (req, res) => {
    res.json(await FoodCategory.find(req.query));
  });

  foodCategoryRoute.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    res.json(await FoodCategory.findById(id));
  });

  foodCategoryRoute.post('/', async (req, res) => {
    await FoodCategory.create(req.body);
    res.json({ message: 'successfully created food categories' });
  });

  return foodCategoryRoute;
});

export default useFoodCategoryRoute;
