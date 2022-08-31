import React from 'react'
import {
  View,
  Keyboard,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native'
import Constants from 'expo-constants'

export default function Screen({ imageSource, style, children }) {
  return (
    <ImageBackground
      source={imageSource}
      resizeMode="cover"
      style={styles.background}
    >
      <SafeAreaView style={[styles.container, style]}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            keyboardShouldPersistTaps="always"
            contentContainerStyle={[styles.view]}
          >
            <View style={[styles.view, style]}>
              <KeyboardAvoidingView style={styles.view} behavior="padding">
                {children}
              </KeyboardAvoidingView>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
