import * as React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Foundation, FontAwesome5, MaterialIcons } from '@expo/vector-icons'

import { useAuthContext } from '../contexts/AuthContext'

import { StartScreen } from '../screens/intro'
import {
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
} from '../screens/auth'
import {
  HomeScreen,
  GroceryStoresScreen,
  RestaurantsScreen,
  ServicesScreen,
} from '../screens/home'

import { FavoritesScreen } from '../screens/favorites'
import { ProfileScreen } from '../screens/profile'

import { theme } from '../core/theme'

const Stack = createNativeStackNavigator()

const RootNavigator = () => {
  const { state } = useAuthContext()
  console.log(state)
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {state.token != null ? (
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      ) : (
        <>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
          <Stack.Screen name="HomeTabs" component={HomeTabs} />
        </>
      )}
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#000',
        tabBarActiveTintColor: theme.colors.primary,
      }}
      barStyle={{ backgroundColor: 'white' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="star" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const HomeStack = createNativeStackNavigator()

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GroceryStoresScreen"
        component={GroceryStoresScreen}
      />
      <Stack.Screen name="RestaurantsScreen" component={RestaurantsScreen} />
      <Stack.Screen name="ServicesScreen" component={ServicesScreen} />
    </HomeStack.Navigator>
  )
}
export default RootNavigator
