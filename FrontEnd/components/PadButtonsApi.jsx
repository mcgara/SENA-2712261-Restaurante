import { View, StyleSheet } from 'react-native'
import CircleButton from './CircleButton'

/**
 * @typedef {import('../contexts/ApiRoutes').ApiRoutesContextValue} ApiRoutesContextValue
 * @typedef {{ api: ApiRoutesContextValue }} PadButtonsApiProps
 * @type {import('react').FC<PadButtonsApiProps>}
 * @param {PadButtonsApiProps}
 */
export function PadButtonsApi({ api }) {
  return (
    <View style={styles.container}>
      <CircleButton text='Usuarios' onPress={() => api.set('/user')} />
      <CircleButton text='Comida' onPress={() => api.set('/food')} />
      <CircleButton text='Categorias' onPress={() => api.set('/food_category')} />
      <CircleButton text='Pedidos' onPress={() => api.set('/order')} />
      <CircleButton text='Facturas' onPress={() => api.set('/invoice')} />
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  }
})

export default PadButtonsApi
