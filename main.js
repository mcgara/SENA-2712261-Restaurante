import { runApp as app } from './index.js';

const commands = {
  database: process.argv[2]?.toLowerCase() === 'database',
  backend: process.argv[2]?.toLowerCase() === 'backend',
  frontend: process.argv[2]?.toLowerCase() === 'frontend',
  appApi: process.argv[2]?.toLowerCase() === 'appapi',
  app: process.argv[2]?.toLowerCase() === 'app',
}

if (commands.database) app.runDataBase();
else if (commands.backend) app.runBackEnd();
else if (commands.frontend) app.runFrontEnd();
else if (commands.appApi) app.runAppApi();
else if (commands.app) app.runApp();

if (Object.values(commands).includes(true)) {
  process.argv = [...process.argv.slice(0, 2), ...process.argv.slice(3)]
}

console.log(process.argv)
