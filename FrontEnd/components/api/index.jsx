/**
 * @typedef {import('../../contexts/ApiRoutes').ApiMode} ApiMode
 * @typedef {import('../../contexts/ApiRoutes').ApiRoutesContextValue} ApiRoutesContextValue
 * @param {ApiRoutesContextValue} api
 */
export function getComponentApi(api) {
  /** @type {Record<ApiMode, import('react').JSX.Element>} */
  const components = {
    // LIST: 
  }
  return components[api.mode.value]
}

export default getComponentApi
