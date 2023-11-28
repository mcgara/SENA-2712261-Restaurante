import { Router } from 'express';
import { onceCallback } from '../utils.js';
import { useFoodModel as Food } from '../database.js';

const useFoodRoute = onceCallback(() => {
  const router = Router();

  router.get('/', async (req, res) => {
    res.json(await Food().find(req.query));
  });

  router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    let response = await Food().findById(id);
    response ?? { message: 'food not found with id: ' + id, status: 1 };
    res.json(response);
  });

  router.post('/', async (req, res) => {
    let response = { message: 'successfully created foods', status: 0 };
    try { await Food().create(req.body); }
    catch { response = { message: 'error to create foods', status: 1 } }
    res.json(response);
  });

  return router;
});

export default useFoodRoute;
