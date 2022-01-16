import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'

const AppButton = ({ onPress, btnText, btnColor, btnTextColor, btnTop }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      position: 'relative',
      height: '5%',
      backgroundColor: btnColor,
      borderRadius: 14,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width: '80%',
      top: btnTop,
    }}
  >
    <Text
      style={{
        fontSize: 18,
        color: btnTextColor,
        fontWeight: 'normal',
        alignSelf: 'center',
      }}
    >
      {btnText}
    </Text>
  </TouchableOpacity>
)

const oldFunction = ({ mode, style, ...props }) => (
  <PaperButton
    style={[
      styles.button,
      mode === 'outlined' && { backgroundColor: theme.colors.surface },
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  />
)

export default function Button({
  onPress,
  btnText = 'btnText',
  btnColor = '#FFFFFF',
  btnTextColor = 'black',
  btnTop = '0%',
}) {
  return (
    <AppButton
      btnText={btnText}
      onPress={onPress}
      btnTextColor={btnTextColor}
      btnColor={btnColor}
      btnTop={btnTop}
    />
  )
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    height: '5%',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '80%',
    top: '88%',
  },
  text: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'normal',
    alignSelf: 'center',
  },
})
