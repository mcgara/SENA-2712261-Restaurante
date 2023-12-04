import { createContext } from 'react'
import EventEmitter from 'events'

/**
 * @typedef {import('../service/types').ApiRoutes} ApiRoutes
 * @typedef {import('../service/types').IApiRoutes} IApiRoutes
 * @typedef {'beforechange' | 'afterchange'} ApiEventNames
 * @typedef {(value: ApiRoutes | null) => ApiRoutes | null} SetApiRoutes
 * @typedef {import('../types').EventEmitter<ApiEventNames>} ApiRoutesEvent
 * @typedef {'SEARCH' | 'LIST' | 'CREATE' | 'UPDATE' | 'REPLACE' | 'DELETE'} ApiMode
 * @typedef {(value: ApiMode) => ApiMode} SetApiMode
 */

const apiMode = {
  /** @type {ApiMode} */
  value: 'LIST',
  /** @type {ApiRoutesEvent} */
  events: new EventEmitter(),
  /** @type {SetApiMode} */
  set: (value) => {
    apiMode.events.emit('beforechange')
    apiMode.value = value
    apiMode.events.emit('afterchange')
  }
}

const apiRoutes = {
  /** @type {ApiRoutes | null} */
  value: null,
  /** @type {ApiRoutesEvent} */
  events: new EventEmitter(),
  /** @type {SetApiRoutes} */
  set: (value) => {
    apiRoutes.events.emit('beforechange')
    apiRoutes.value = value
    apiRoutes.events.emit('afterchange')
  },
  mode: apiMode
}

/** @typedef {typeof apiRoutes} ApiRoutesContextValue */
export const ApiRoutesContext = createContext(apiRoutes)

/**
 * @typedef {import('react').PropsWithChildren} ApiRoutesProviderProps
 * @type {import('react').FC<ApiRoutesProviderProps>}
 * @param {ApiRoutesProviderProps}
 */
export function ApiRoutesProvider({ children }) {
  return (
    <ApiRoutesContext.Provider value={apiRoutes}>
      {children}
    </ApiRoutesContext.Provider>
  )
}

export default ApiRoutesContext
