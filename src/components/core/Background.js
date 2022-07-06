import React from 'react'
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
} from 'react-native'
import { theme } from '../../core/theme'

export default function Background({ imageSource, children }) {
  return (
    <ImageBackground
      source={imageSource}
      resizeMode="cover"
      style={styles.background}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <KeyboardAvoidingView style={styles.container} behavior="height">
          {children}
        </KeyboardAvoidingView>
      </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    width: '100%',
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
})
