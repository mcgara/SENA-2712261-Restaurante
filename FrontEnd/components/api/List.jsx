import { useId } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { toArray } from '../../utils'
import ApiItem from './Item'

/**
 * @type {import('./index').ComponentApi}
 * @param {import('./index').ComponentApiProps}
 */
export function ApiList({ data }) {
  const items = toArray(data)
  return (
    <ScrollView>
      {items.map((item) => <ApiItem key={useId()} data={item} />)}
    </ScrollView>
  )
}

export default ApiList
