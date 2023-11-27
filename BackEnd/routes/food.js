import { Router } from 'express';
import { onceCallback } from '../utils.js';
import { useFood } from '../database.js';

const foodRoute = Router();

const useFoodRoute = onceCallback(() => {
  const Food = useFood();

  foodRoute.get('/', async (req, res) => {
    res.json(await Food.find(req.query));
  });

  foodRoute.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    res.json(await Food.findById(id));
  });

  foodRoute.post('/', async (req, res) => {
    await Food.create(req.body);
    res.json({ message: 'successfully created foods' });
  });

  return foodRoute;
});

export default useFoodRoute;
