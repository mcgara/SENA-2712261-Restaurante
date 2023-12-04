import { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScreensContext, ApiRoutesContext } from '../../contexts/index'
import ScreenBg from '../designs/ScreenBg'
import CircleButton from '../CircleButton'
import BarApiMode from '../BarApiMode'
import PadButtonsApi from '../PadButtonsApi'
import getComponentApi from '../api/index'
import useForceUpdate from '../../hooks/useForceUpdate'

/** @type {import('react').FC<{}>} */
export function HomeScreen() {
  const { screenStyles } = useContext(ScreensContext)
  const api = useContext(ApiRoutesContext)

  useForceUpdate((forceUpdate) => {
    api.events.on('afterchange', forceUpdate)
    return () => api.events.off('afterchange', forceUpdate)
  }, [])

  return (
    <ScreenBg style={styles.bg}>
      <View style={[screenStyles.container, styles.container]}>
        <View style={styles.header}>
          <View style={styles.row}>
            {
              api.value
              ? <CircleButton text='<-' scale={0.08} style={styles.button} onPress={() => api.set(null)} />
              : null
            }
            <Text style={styles.title}>API {api.value ?? 'Restaurante'}</Text>
          </View>
          <BarApiMode api={api} />
        </View>
        {
          !api.value
          ? <PadButtonsApi api={api} />
          : getComponentApi(api)
        }
      </View>
    </ScreenBg>
  )
}

export const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#ddd',
  },
  container: {
    alignItems: 'center',
    padding: '5%',
  },
  header: {
    width: '100%',
    paddingVertical: 20,
    position: 'relative'
  },
  row: {
    flexDirection: 'row-reverse',
    justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    position: 'absolute',
    left: 50,
    backgroundColor: '#ed0',
    borderColor: '#eee',
  }
})

export default HomeScreen
