import React, { useState } from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'

const Button = ({
  text,
  width,
  height,
  borderRadius,
  backgroundColor,
  backgroundColorPressed,
  style,
  textStyle,
  textColor,
  icon,
  onPress,
}) => {
  const [pressColor, setPressColor] = useState(backgroundColor)
  const [pressTextColor, setPressTextColor] = useState(textColor || '#000')

  const iconDisplay = icon ? <View style={[styles.icon]}>{icon}</View> : null

  return (
    <TouchableOpacity
      onPressIn={() => {
        setPressColor(backgroundColorPressed || 'transparent')
        setPressTextColor(backgroundColor || textColor)
      }}
      onPressOut={() => {
        setPressColor(backgroundColor)
        setPressTextColor(textColor)
      }}
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.container,
        {
          width,
          height,
          borderRadius,
          backgroundColor: pressColor,
        },
        style,
      ]}
    >
      <Text style={[styles.text, textStyle, { color: pressTextColor }]}>
        {text}
      </Text>
      {iconDisplay}
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
  icon: {
    position: 'absolute',
    right: 20,
    width: 20,
    height: 20,
  },
})

export default Button
