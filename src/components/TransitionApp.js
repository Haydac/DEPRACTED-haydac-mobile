import { createStackNavigator } from '@react-navigation/stack'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Animated, { Easing } from 'react-native-reanimated'
import Home from '../screens/Home'
import { createAppContainer } from 'react-navigation'

const SlideFromBottom = (index, position, height) => {
  const translateY = position.interpolate({
    inputRange: [index - 1, index],
    outputRange: [height, 0],
  })

  return { transform: [{ translateY }] }
}

const TransitionConfiguration = () => {
  return {
    tranisitionSpec: {
      duration: 750, // speed of transition
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps
      const width = layout.initWidth
      const height = layout.initHeight
      const { index, route } = scene
      const params = route.params || {} // use empty object if there's no route params
      const transtion = params.transition || 'default' // string 'default' is the defaul value
      return {
        bottomTransition: SlideFromBottom(index, position, height),
      }
    },
  }
}

const RootStack = createStackNavigator({
  SlideFromBottom: { screen: SlideFromBottom },
  Base: { screen: Home },
})

// export defautl TransitionApp
const AppContainer = createAppContainer(RootStack)

export default function TransitionApp {
  return (
     <AppContainer />
  )
}

