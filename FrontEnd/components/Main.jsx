import { View, StyleSheet } from 'react-native'
import { ScreensProvider } from '../contexts/Screens'
import { ApiRoutesProvider } from '../contexts/ApiRoutes'
import Screens, { ScreenDefault } from './screens/index'

export function Main() {
  return (
    <View style={styles.container}>
      <ScreensProvider screens={Screens}>
        <ApiRoutesProvider>
          <ScreenDefault />
        </ApiRoutesProvider>
      </ScreensProvider>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Main
