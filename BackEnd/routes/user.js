import { Router } from 'express';
import { onceCallback } from '../utils.js';
import { useUserModel as User } from '../database.js';

const useUserRoute = onceCallback(() => {
  const router = Router();

  router.get('/', async (req, res) => {
    res.json(await User().find(req.query)); // TODO: validate req.query to fields of user model
  });

  router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    let response = await User().findById(id);
    response ?? { message: 'user not found with id: ' + id, status: 1 };
    res.json(response);
  });

  router.post('/', async (req, res) => {
    let response = { message: 'successfully created users', status: 0 };
    try { await User().create(req.body); } // TODO: validate req.body to fields of user model
    catch { response = { message: 'error to create users', status: 1 } }
    res.json(response);
  });

  return router;
});

export default useUserRoute;
