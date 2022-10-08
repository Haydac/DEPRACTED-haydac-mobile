import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5, MaterialIcons, FontAwesome } from '@expo/vector-icons'

import { useAuthContext } from '../contexts/AuthContext'

import { StartScreen } from '../screens/intro'
import {
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  VerificationScreen,
  NewPasswordScreen,
} from '../screens/auth'

import {
  HomeScreen,
  GroceryStoresScreen,
  RestaurantsScreen,
  ServicesScreen,
  BusinessScreen,
  LocationScreen,
} from '../screens/home'

import { BrowseScreen } from '../screens/browse'
import { FavoritesScreen } from '../screens/favorites'
import { ProfileScreen } from '../screens/profile'

import { theme } from '../core/theme'

const Stack = createNativeStackNavigator()

export default function RootNavigator() {
  const { state } = useAuthContext()

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, statusBarTranslucent: true }}
    >
      {state.token != null ? (
        <Stack.Screen name="HomeTabs" component={AppTabs} />
      ) : (
        <>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
            options={{
              headerShown: true,
              title: '',
              headerTintColor: theme.colors.primary,
              headerShadowVisible: false,
              headerBackTitle: 'login',
              headerBackTitleVisible: true,
            }}
          />

          <Stack.Screen
            name="VerificationScreen"
            component={VerificationScreen}
            options={{
              headerShown: true,
              title: '',
              headerTintColor: theme.colors.primary,
              headerShadowVisible: false,
              headerBackTitle: 'email',
              headerBackTitleVisible: true,
            }}
          />

          <Stack.Screen
            name="NewPasswordScreen"
            component={NewPasswordScreen}
            options={{
              headerShown: true,
              title: '',
              headerTintColor: theme.colors.primary,
              headerShadowVisible: false,
              headerBackTitle: 'verification',
              headerBackTitleVisible: true,
            }}
          />

          <Stack.Screen name="HomeTabs" component={AppTabs} />
        </>
      )}
    </Stack.Navigator>
  )
}

const Tab = createBottomTabNavigator()

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#000',
        tabBarActiveTintColor: theme.colors.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Browse"
        component={BrowseScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStackNavigator}
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
          headerShown: true,
          title: 'Account',
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={20} color={color} />
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
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GroceryStoresScreen"
        component={GroceryStoresScreen}
        options={{
          title: 'Grocery Stores',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="RestaurantsScreen"
        component={RestaurantsScreen}
        options={{
          title: 'Restaurants',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="ServicesScreen"
        component={ServicesScreen}
        options={{
          title: 'Services',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="BusinessScreen"
        component={BusinessScreen}
        options={{
          title: '',
          headerTintColor: theme.colors.primary,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={{
          title: '',
          headerTintColor: theme.colors.primary,
          headerShadowVisible: false,
        }}
      />
    </HomeStack.Navigator>
  )
}

const FavoritesStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          headerShown: true,
          title: 'Favourites',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="BusinessScreen"
        component={BusinessScreen}
        options={{
          title: '',
          headerTintColor: theme.colors.primary,
          headerTransparent: true,
        }}
      />
    </HomeStack.Navigator>
  )
}
