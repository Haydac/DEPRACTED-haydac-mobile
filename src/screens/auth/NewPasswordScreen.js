import React, { useState } from 'react'
import { Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Screen from '../../components/core/Screen'
import InputField from '../../components/forms/InputField'
import Button from '../../components/buttons/Button'
import LockIcon from '../../components/core/LockIcon'
import DesignIcon from '../../components/core/DesignIcon'

import { theme } from '../../core/theme' //provides theme/design for the componenet

export default function NewPasswordScreen({ navigation }) {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [activeField, setActiveField] = useState('')

  const activeIconColor = theme.colors.primary
  const inactiveIconColor = '#A5A5A5'

  const passwordIcon = (
    <MaterialIcons
      name="lock"
      color={activeField == 'Password' ? activeIconColor : inactiveIconColor}
      size={20}
    />
  )

  const passwordConfirmIcon = (
    <MaterialIcons
      name="lock"
      color={
        activeField == 'PasswordConfirm' ? activeIconColor : inactiveIconColor
      }
      size={20}
    />
  )

  const handleResetPassword = () => {
    // call reset API
    navigation.navigate('LoginScreen')
  }

  return (
    <Screen style={styles.container}>
      <LockIcon style={styles.locksvg} />

      <Text style={styles.instructions}>
        Please enter your verification code
      </Text>

      <Text style={styles.pageinstructions}>
        A verification code has been sent to your email{'\n'}
        please enter it below
      </Text>

      <InputField
        width={'80%'}
        height={45}
        id="Password"
        placeHolder="New password"
        placeholderTextColor="#C2C2C2"
        leftIcon={passwordIcon}
        inputFieldStyle={[{ marginBottom: 7 }, styles.inputFieldStyle]}
        text={password}
        setText={setPassword}
        secureTextEntry
        activeField={activeField}
        setActiveField={setActiveField}
      />

      <InputField
        id="PasswordConfirm"
        placeholderTextColor="#C2C2C2"
        width={'80%'}
        height={45}
        placeHolder="Confirm Password"
        leftIcon={passwordIcon}
        inputFieldStyle={[styles.inputFieldStyle, { marginTop: '5%' }]}
        text={passwordConfirm}
        setText={setPasswordConfirm}
        secureTextEntry
        setActiveField={setActiveField}
      />

      <Button
        text="Submit"
        width={'50%'}
        height={45}
        borderRadius={15}
        backgroundColor={theme.colors.primary}
        style={[styles.nextbtn, { zIndex: 1 }]}
        textStyle={styles.nextBtnText}
        textColor={'#fff'}
        onPress={() => handleResetPassword()}
      />

      <DesignIcon style={styles.iconsvg} />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  //place the svg at the bottom right of the screen
  iconsvg: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  //display the icon for this page in the center
  locksvg: {
    alignSelf: 'center',
  },
  //place text on screen
  instructions: {
    marginTop: '7%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#000',
  },
  //place other set of instuctions on screen
  pageinstructions: {
    marginTop: '7%',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 12,
    color: '#858585',
  },
  //place and design the button
  nextbtn: {
    marginTop: '10%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  //text for the button
  nextBtnText: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
  //the line for the input
  inputFieldStyle: {
    marginTop: '10%',
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#BB6BD9',
  },
})
