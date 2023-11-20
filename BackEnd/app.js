import express from 'express';
import { onceCallback } from './utils.js';

export const useApp = onceCallback(() => {
  const app = express();

  app.use(express.json());

  return app;
});

export default useApp;
