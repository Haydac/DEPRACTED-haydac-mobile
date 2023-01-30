import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { theme } from '../../core/theme'
import { Dimensions } from 'react-native'
const screenWidth = Dimensions.get('screen').width
const screenHeight = Dimensions.get('screen').height
import { MaterialIcons } from '@expo/vector-icons'

const SecureInputField = (props) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const toggleSecuretextEntry = () => {
    setSecureTextEntry((prev) => !prev)
  }

  return (
    <View>
      <TextInput
        placeHolder={props.placeHolder}
        secureTextEntry={secureTextEntry}
      />
      <MaterialIcons
        name="lock"
        color={
          activeField == 'PasswordConfirm' ? activeIconColor : inactiveIconColor
        }
        size={17}
      />
    </View>
  )
}

const InputField = ({
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
  type = 'none',
}) => {
  const [hidePassword, setHidpassword] = useState(true)
  const [passwordIconColor, setPasswordIconColor] = useState('#A5A5A5')

  let textInputStyle = {
    paddingTop: screenHeight * 0.01,
    marginRight: screenWidth * 0.1,
    fontSize: 18,
    flex: 1,
  }
  if (type === 'secure') {
    textInputStyle = {
      ...textInputStyle,
      marginRight: screenWidth * 0.008,
    }
  }

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
      <View style={styles.errorMessage}>
        <Text style={{ color: theme.colors.error }}>{error}</Text>
      </View>
      {leftIcon ? (
        <View style={[styles.icon, iconContainerStyle]}>{leftIcon}</View>
      ) : null}
      <TextInput
        placeholderTextColor={placeholderTextColor}
        value={text}
        onChangeText={setText}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry && hidePassword}
        keyboardType={
          id == 'Email'
            ? 'email-address'
            : id == 'Phone'
            ? 'phone-pad'
            : id == 'Number'
            ? 'number-pad'
            : 'default'
        }
        style={textInputStyle}
        selectionColor="#B659FF50"
        blurOnSubmit={blurOnSubmit}
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderBottomWidth: screenWidth * 0.002,
    borderBottomColor: theme.colors.primary,
    marginBottom: screenHeight * 0.06,
  },
  icon: {
    flex: 1,
    paddingTop: screenHeight * 0.01,
    marginRight: -(screenWidth * 0.5),
  },
  errorMessage: {
    position: 'absolute',
    left: 49,
    top: 0,
    marginTop: -10,
    fontWeight: 'bold',
    fontSize: 10,
    lineHeight: 15,
  },
})

export default InputField
