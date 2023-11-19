import { Router } from 'express';
import { onceCallback } from '../utils.js';
import { useInvoice } from '../database.js';

const invoiceRoute = Router();

const useInvoiceRoute = onceCallback(() => {
  const Invoice = useInvoice();

  invoiceRoute.get('/', async (req, res) => {
    res.json(await Invoice.find(req.query));
  });

  invoiceRoute.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    res.json(await Invoice.findById(id));
  });

  invoiceRoute.post('/', async (req, res) => {
    await Invoice.create(req.body);
    res.json({ message: 'successfully created invoices' });
  });

  return invoiceRoute;
});

export default useInvoiceRoute;
