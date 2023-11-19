import { useDataBase } from './database.js';
import { useBackEnd } from "./index.js";

await useDataBase();
useBackEnd();
