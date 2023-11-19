import express from 'express';
import { onceCallback } from './utils.js';
import {
  useUserRoute,
} from './routes/index.js';

const app = express();
app.use(express.json())

const useApp = onceCallback(() => {
  app.use('/user', useUserRoute());

  return app;
})

export default useApp;
