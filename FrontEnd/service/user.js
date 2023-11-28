import { api, routes } from './api'

/**
 * @typedef {import('./types').User} User
 * @typedef {import('./types').UserID} UserID
 */

/**
 * @param {Partial<User>} [fields]
 * @return {Promise<User | null>}
 */
export const findUser = async (fields) => {
  if (!api) return null
  let user = null
  try { user = (await api.get(routes.user.get(), { params: fields })).data }
  catch {}
  return user
}

/**
 * @param {UserID} id
 * @return {Promise<User | null>}
 */
export const findUserById = async (id) => {
  if (!api) return null
  let user = null
  try { user = (await api.get(routes.user.get(id))).data }
  catch {}
  return user
}

/**
 * @param {User | User[]} fields
 * @return {Promise<User | null>}
 */
export const createUser = async (fields) => {
  if (!api) return null
  let response = null
  try { response = (await api.post(routes.user.post(), fields)).data }
  catch {}
  return response
}

export default {
  findById: findUserById
}
