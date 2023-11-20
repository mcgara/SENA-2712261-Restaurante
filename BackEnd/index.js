import { URL } from 'node:url';
import useApp from './app.js';
import useAppConfig from './app.config.js';
import useAppRoutes from './routes/index.js';
import { onceCallback, useDotenv, useLogger } from './utils.js';

export const useBackEnd = onceCallback(() => {
  useDotenv();
  const logger = useLogger();

  const app = useApp();
  const config = useAppConfig();
  useAppRoutes(app);

  let url = new URL(`http://${config.host}:${config.port}`);
  app.listen(config.port, config.host, () => {
    logger.log.notice('%s: server listen on ' + url.href, 'BACKEND')
  });

  return app;
});

export default {
  useBackEnd
}
