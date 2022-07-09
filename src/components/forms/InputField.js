import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '../../core/theme'

export default function InputField({
  id,
  placeHolder,
  icon,
  iconContainerStyle,
  inputFieldStyle,
  text,
  setText,
  secureTextEntry,
  activeField,
  setActiveField,
}) {
  const iconDisplay = icon ? (
    <View style={[styles.icon, iconContainerStyle]}>{icon}</View>
  ) : null

  return (
    <View style={[styles.container, inputFieldStyle]}>
      {iconDisplay}
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
        style={[styles.textInputStyle]}
        selectionColor="#B659FF50"
        onFocus={() => setActiveField(id)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
