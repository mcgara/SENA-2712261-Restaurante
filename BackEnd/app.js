import express from 'express';
import { onceCallback } from './utils.js';
import routes from './routes/index.js';

const app = express();
app.use(express.json());

const useApp = onceCallback(() => {
  app.use('/user', routes.useUser());
  app.use('/food', routes.useFood());
  app.use('/food_category', routes.useFoodCategory());
  app.use('/order', routes.useOrder());
  app.use('/invoice', routes.useInvoice());

  return app;
});

export default useApp;
