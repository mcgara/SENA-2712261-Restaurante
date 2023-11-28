import { Router } from 'express';
import { onceCallback } from '../utils.js';
import { useInvoice as Invoice } from '../database.js';

const useInvoiceRoute = onceCallback(() => {
  const router = Router();

  router.get('/', async (req, res) => {
    res.json(await Invoice().find(req.query));
  });

  router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    let response = await Invoice().findById(id);
    response ?? { message: 'invoice not found with id: ' + id, status: 1 };
    res.json(response);
  });

  router.post('/', async (req, res) => {
    let response = { message: 'successfully created invoices', status: 0 };
    try { await Invoice().create(req.body); }
    catch { response = { message: 'error to create invoices', status: 1 } }
    res.json(response);
  });

  return router;
});

export default useInvoiceRoute;
