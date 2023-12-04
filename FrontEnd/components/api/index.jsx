import ApiList from './List'

/**
 * @typedef {import('../../service/types').ApiRoutesData} ApiRoutesData
 * @typedef {{ data?: ApiRoutesData | ApiRoutesData[] }} ComponentApiProps
 * @typedef {import('react').FC<ComponentApiProps>} ComponentApi
 * @typedef {import('../../contexts/ApiRoutes').ApiMode} ApiMode
 * @typedef {import('../../contexts/ApiRoutes').ApiRoutesContextValue} ApiRoutesContextValue
*/

/**
 * @param {ApiRoutesContextValue} api
 */
export function getComponentApi(api) {
  /** @type {Record<ApiMode, ComponentApi>} */
  const components = {
    LIST: ApiList
  }
  return components[api.mode.value]
}

export default getComponentApi
