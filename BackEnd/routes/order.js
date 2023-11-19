import { Router } from 'express';
import { onceCallback } from '../utils.js';
import { useOrder } from '../database.js';

const orderRoute = Router();

const useOrderRoute = onceCallback(() => {
  const Order = useOrder();

  orderRoute.get('/', async (req, res) => {
    res.json(await Order.find(req.query));
  });

  orderRoute.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    res.json(await Order.findById(id));
  });

  orderRoute.post('/', async (req, res) => {
    await Order.create(req.body);
    res.json({ message: 'successfully created orders' });
  });

  return orderRoute;
});

export default useOrderRoute;
