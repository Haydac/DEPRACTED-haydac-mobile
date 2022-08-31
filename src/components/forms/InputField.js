import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { theme } from '../../core/theme'

export default function InputField({
  id,
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
  const [hidePassword, setHidpassword] = useState(true)
  const [passwordIconColor, setPasswordIconColor] = useState('#A5A5A5')

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
        value={text}
        onChangeText={setText}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry && hidePassword}
        keyboardType={
          id == 'Email'
            ? 'email-address'
            : id == 'Phone'
            ? 'phone-pad'
            : 'default'
        }
        style={[styles.textInputStyle]}
        selectionColor="#B659FF50"
        onBlur={() => {
          setPasswordIconColor('#A5A5A5')
          setActiveField('')
        }}
        onFocus={() => {
          setPasswordIconColor(theme.colors.primary)
          setActiveField(id)
        }}
      />
      {secureTextEntry ? (
        <View style={[styles.icon, iconContainerStyle]}>
          <Feather
            onPress={() => setHidpassword(!hidePassword)}
            name={hidePassword ? 'eye-off' : 'eye'}
            color={passwordIconColor}
            size={20}
          />
        </View>
      ) : null}
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
