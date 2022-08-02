import React from 'react'
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import AuthContextProvider from './src/contexts/AuthContext'
import RootNavigator from './src/navigation'

export default function App() {
  return (
    <NavigationContainer>
      <AuthContextProvider>
        <RootNavigator />
      </AuthContextProvider>
      <StatusBar style="dark" />
    </NavigationContainer>
  )
}
