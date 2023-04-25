import React, { useEffect } from 'react'
import RootNavigator from './src/navigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import AuthContextProvider from './src/contexts/AuthContext'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { fetchBusinesses } from './src/redux/business/businessActions'
// import 'react-native-dotenv/config'

export default function App() {
  // Dispatch action to fetch all businesses
  useEffect(async () => {
    const fetchData = async () => {
      console.log('testing')
      store.dispatch(await fetchBusinesses())
    }
    fetchData()
  }, [])

  console.log(store.getState())

  // check if dispatch was successfull
  if (store.getState().business) {
    console.log('successfully fetched businesses from api')
    console.log(store.getState().business.allBusinesses.message)
  } else {
    console.log('fail')
  }

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
