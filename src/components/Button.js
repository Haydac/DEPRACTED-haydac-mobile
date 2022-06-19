import React from 'react'
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native'

const Button = ({
  text,
  width,
  height,
  borderRadius,
  backgroundColor,
  style,
  textStyle,
  icon,
  onPress,
}) => {
  const iconDisplay = icon ? <View style={[styles.icon]}>{icon}</View> : null

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.container,
        {
          width,
          height,
          borderRadius,
          backgroundColor,
        },
        style,
      ]}
    >
      <Text style={[styles.text, textStyle]}>{text}</Text>
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
    color: 'black',
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
