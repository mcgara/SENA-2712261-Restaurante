/**
 * @param {string} route
 * @param {boolean} [end]
 * @param {boolean} [start]
 */
export function guardSlash(route, end, start) {
  const isEndSlash = route.endsWith('/')
  if (!isEndSlash && end === true) route += '/'
  else if (isEndSlash && end === false) route = route.slice(0, route.length)
  
  const isStartSlash = route.startsWith('/')
  if (!isStartSlash && start === true) route = '/' + route
  else if (isStartSlash && start === false) route = route.slice(1, route.length)

  return route
}

/**
 * @param {`/${string}`} baseRoute
 * @param {string} [path]
 */
export const Get = (baseRoute, path) =>
  guardSlash(baseRoute, false) +
  path ? guardSlash(path, null, true) : ''

export const Post = Get
export const Delete = Get
export const Put = Get
export const Patch = Get

/** @param {`/${string}`} baseRoute */
export const Router = baseRoute => {
  return {
    /** @param {string} [path] */
    get: path => Get(baseRoute, path),
    /** @param {string} [path] */
    post: path => Post(baseRoute, path),
    /** @param {string} [path] */
    delete: path => Put(baseRoute, path),
    /** @param {string} [path] */
    put: path => Put(baseRoute, path),
    /** @param {string} [path] */
    patch: path => Patch(baseRoute, path)
  }
}

export default {
  router: Router,
  get: Get,
  post: Post,
  delete: Delete,
  put: Put,
  patch: Patch
}
