import { useId } from 'react'
import { View, Text, StyleSheet } from 'react-native'

/**
 * @typedef {import('./index').ApiRoutesData} ApiRoutesData
 * @typedef {{ data?: ApiRoutesData }} ApiListProps
 * @type {import('react').FC<ApiListProps>}
 * @param {ApiListProps}
 */
export function ApiItemList({ data }) {
  /** @type {[{[P in keyof ApiRoutesData]: [P, ApiRoutesData[P]] }[keyof ApiRoutesData]]} */
  const item = Object.entries(data)
  
  return (
    <View>
      {item.map(([prop, value]) => <Text>{prop}: {value}</Text>)}
    </View>
  )
}

export default ApiItemList
