import { useDataBase } from './database.js';
import { useBackEnd } from './default.js';

await useDataBase();
useBackEnd();
