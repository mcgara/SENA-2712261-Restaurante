import { useState, useCallback, useEffect } from 'react'

/**
 * @typedef {() => void} Destructor
 * @param {(forceUpdate: () => void) => void | Destructor} effect
 * @param {import('react').DependencyList} [deps]
 */
export default function useForceUpdate(effect, deps) {
  const [, update] = useState()
  const forceUpdate = useCallback(() => update({}))
  useEffect(() => effect(forceUpdate), deps)
}
