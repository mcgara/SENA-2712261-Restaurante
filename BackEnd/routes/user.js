import { Router } from 'express';
import { onceCallback } from '../utils.js';
import { useUser } from '../database.js';

const userRoute = Router();

const useUserRoute = onceCallback(() => {
  const User = useUser();

  userRoute.get('/', async (req, res) => {
    res.json(await User.find(req.query)); // TODO: validate req.query to fields of user model
  });

  userRoute.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    res.json(await User.findById(id));
  });

  userRoute.post('/', async (req, res) => {
    await User.create(req.body); // TODO: validate req.body to fields of user model
    res.json({ message: 'successfully created users' });
  });

  return userRoute;
});

export default useUserRoute;
