import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { theme } from '../../core/theme'

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
  error,
  secureTextEntry,
  setActiveField,
  blurOnSubmit,
}) {
  const [hidePassword, setHidpassword] = useState(true)
  const [passwordIconColor, setPasswordIconColor] = useState('#A5A5A5')
  const [placeHolderColor, setPlaceHolderColor] = useState(placeholderTextColor)
  const [currentPlaceHolder, setCurrentPlaceHolder] = useState(placeHolder)

  return (
    <View
      style={[
        styles.container,
        inputFieldStyle,
        {
          width: width,
          height: height,
        },
        error ? { borderBottomColor: theme.colors.error } : {},
      ]}
    >
      {leftIcon ? (
        <View style={[styles.icon, iconContainerStyle]}>{leftIcon}</View>
      ) : null}
      <TextInput
        placeholderTextColor={placeHolderColor}
        value={text}
        onChangeText={setText}
        placeholder={currentPlaceHolder}
        secureTextEntry={!error && secureTextEntry && hidePassword}
        keyboardType={
          id == 'Email'
            ? 'email-address'
            : id == 'Phone'
            ? 'phone-pad'
            : id == 'Number'
            ? 'number-pad'
            : 'default'
        }
        style={[styles.textInputStyle]}
        selectionColor="#B659FF50"
        blurOnSubmit={blurOnSubmit}
        onBlur={() => {
          setPasswordIconColor('#A5A5A5')
          setActiveField('')
          setPlaceHolderColor(placeholderTextColor)
          setCurrentPlaceHolder(placeHolder)
        }}
        onFocus={() => {
          setPasswordIconColor(theme.colors.primary)
          setActiveField(id)
          setPlaceHolderColor(error ? theme.colors.error : placeholderTextColor)
          setCurrentPlaceHolder(error ? error : placeHolder)
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
