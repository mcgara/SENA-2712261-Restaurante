import { useLogger } from '../utils.js';
const logger = useLogger();

/**
 * @typedef {import('./types').Usuario} Usuario 
 * @typedef {import('./models.js').ModelsConnection} ModelsConnection
 */

/**
 * @param {ModelsConnection} connection
 * @param {number} id
 */
export async function UsuarioFindById(connection, id) {
  const db = await connection;
  if (!db) return null;

  /** @type {Usuario | null} */
  let Usuario = null;
  const query = 'SELECT * FROM usuario WHERE usuario.id = ?';

  try {
    const result = await db.query(query, [id]);
    if (result[0].length > 0) Usuario = result[0][0];
  } catch (err) {
    logger.log.error('DATABASE: ', err.message);
  }
  return Usuario;
}

/** @param {ModelsConnection} connection */
export function useUsuarioModel(connection) {
  return {
    findById: id => UsuarioFindById(connection, id)
  }
}

export default useUsuarioModel;
