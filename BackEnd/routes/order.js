import { Router } from 'express';
import { onceCallback } from '../utils.js';
import { useOrder as Order } from '../database.js';

const useOrderRoute = onceCallback(() => {
  const router = Router();

  router.get('/', async (req, res) => {
    res.json(await Order().find(req.query));
  });

  router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    let response = await Order().findById(id);
    response ?? { message: 'order not found with id: ' + id, status: 1 };
    res.json(response);
  });

  router.post('/', async (req, res) => {
    let response = { message: 'successfully created orders', status: 0 };
    try { await Order().create(req.body); }
    catch { response = { message: 'error to create orders', status: 1 } }
    res.json(response);
  });

  return router;
});

export default useOrderRoute;
