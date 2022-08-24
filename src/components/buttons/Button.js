import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'

export default function Button({
  text,
  width,
  height,
  borderRadius,
  backgroundColor,
  style,
  textStyle,
  textColor,
  leftIcon,
  rightIcon,
  onPress,
  onPressIn,
  onPressOut,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      activeOpacity={0.8}
      style={[
        styles.container,
        {
          width,
          height,
          borderRadius,
          backgroundColor: backgroundColor,
        },
        style,
      ]}
    >
      {leftIcon ? <View style={[styles.leftIcon]}>{leftIcon}</View> : null}
      <Text style={[styles.text, textStyle, { color: textColor || '#000' }]}>
        {text}
      </Text>
      {rightIcon ? <View style={[styles.rightIcon]}>{rightIcon}</View> : null}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  text: {
    letterSpacing: 1,
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  rightIcon: {
    position: 'absolute',
    left: 20,
    width: 20,
    height: 20,
  },
  rightIcon: {
    position: 'absolute',
    right: 20,
    width: 20,
    height: 20,
  },
})
