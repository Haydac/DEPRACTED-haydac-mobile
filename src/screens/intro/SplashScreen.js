import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Brand from '../../components/core/Brand'
import { theme } from '../../core/theme'

// TODO: add lottie custom animation
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Brand color={theme.colors.primary} logoStyle={styles.logoStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: 130,
    height: 130,
  },
})
