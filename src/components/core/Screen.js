import React from 'react'
import {
  View,
  Keyboard,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native'
import Constants from 'expo-constants'

export default function Screen({ svg, style, children }) {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={[styles.view, style]}>
        <KeyboardAvoidingView style={styles.view} behavior="padding">
          {svg}
          {children}
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    flex: 1,
  },
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
})
