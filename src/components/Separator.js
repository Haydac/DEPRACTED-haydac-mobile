import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Separator({
  width,
  text,
  lineColor,
  textColor,
  style,
}) {
  return (
    <View
      style={[
        styles.container,
        {
          width: width,
        },
        style,
      ]}
    >
      <View style={[styles.lineStyle, { backgroundColor: lineColor }]} />
      <View>
        <Text style={(styles.textStyle, { color: textColor })}>{text}</Text>
      </View>
      <View style={[styles.lineStyle, { backgroundColor: lineColor }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineStyle: {
    flex: 1,
    height: 1,
  },
  textStyle: {
    width: 50,
    textAlign: 'center',
  },
})
