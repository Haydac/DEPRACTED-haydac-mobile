import React from 'react'
import { ImageBackground, StyleSheet } from 'react-native'
import Logo from '../components/Logo'

export default function StartScreen() {
  return (
    <ImageBackground
      source={require('../assets/login.png')}
      resizeMode="cover"
      style={styles.image}
    >
      <Logo />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
})
