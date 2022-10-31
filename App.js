import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import AuthContextProvider from './src/contexts/AuthContext'
import RootNavigator from './src/navigation'
import { Provider } from 'react-redux'
import store from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <AuthContextProvider>
            <RootNavigator />
          </AuthContextProvider>
          <StatusBar style="dark" />
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  )
}
