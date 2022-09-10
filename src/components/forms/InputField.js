import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default function InputField({
  id,
  placeholderTextColor,
  width,
  height,
  placeHolder,
  leftIcon,
  iconContainerStyle,
  inputFieldStyle,
  text,
  setText,
  secureTextEntry,
  setActiveField,
}) {
  return (
    <View
      style={[
        styles.container,
        inputFieldStyle,
        { width: width, height: height },
      ]}
    >
      {leftIcon ? (
        <View style={[styles.icon, iconContainerStyle]}>{leftIcon}</View>
      ) : null}
      <TextInput
        placeholderTextColor={placeholderTextColor}
        value={text}
        onChangeText={setText}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
        style={[styles.textInputStyle]}
        selectionColor="#B659FF50"
        onFocus={() => setActiveField(id)}
        onBlur={() => setActiveField('')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 0,
    paddingHorizontal: 10,
  },
  icon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    paddingHorizontal: 10,
    flex: 1,
  },
})
