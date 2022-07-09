import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native'
import { Text } from 'react-native-paper'
import Constants from 'expo-constants'

import Icon from 'react-native-vector-icons/FontAwesome'
import Header from '../../components/Header'
import Button from '../../components/buttons/Button'
import { emailValidator } from '../../helpers/emailValidator'
import { passwordValidator } from '../../helpers/passwordValidator'
import InputField from '../../components/forms/InputField'
import Background from '../../components/core/Background'
import { theme } from '../../core/theme'

function updateActiveField() {}

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [activeField, setActiveField] = useState('')

  const emailIcon = (
    <Icon
      name="envelope"
      color={activeField == 'Email' ? '#BB6BD9' : '#A5A5A5'}
      size={15}
    />
  )
  const passwordIcon = (
    <Icon
      name="lock"
      color={activeField == 'Password' ? '#BB6BD9' : '#A5A5A5'}
      size={22}
    />
  )

  const formWidth = '100%'
  const formItemHeight = 45

  const onLoginPressed = () => {
    // TODO: Anjola
    console.log('Log in button pressed')
    navigation.navigate('HomeTabs')
  }

  // Keyboard listener

  useEffect(() => {
    const showObserver = Keyboard.addListener(
      'keyboardDidShow',
      _keyboardDidShow
    )
    const hideObserver = Keyboard.addListener(
      'keyboardDidHide',
      _keyboardDidHide
    )

    return () => {
      if (showObserver.removeListener) {
        showObserver.removeListener('keyboardDidShow', _keyboardDidShow)
      }
      if (hideObserver.removeListener) {
        hideObserver.removeListener('keyboardDidHide', _keyboardDidHide)
      }
    }
  }, [])

  const [isKeyboardOpen, setIsKeyBoardOpen] = useState(false)
  const _keyboardDidShow = () => setIsKeyBoardOpen(true)
  const _keyboardDidHide = () => setIsKeyBoardOpen(false)

  return (
    <Background
      imageSource={isKeyboardOpen ? null : require('../../assets/login.png')}
    >
      <View style={styles.content}>
        {/* Login header :  */}
        <View style={styles.header}>
          {isKeyboardOpen ? null : (
            <Header style={styles.welcomeMessage}>Welcome{'\n'}Back!</Header>
          )}
          <Button
            width="6%"
            height="5%"
            text="Skip"
            backgroundColor="transparent"
            style={styles.skipBtn}
            textStyle={[
              styles.skipBtnText,
              { color: isKeyboardOpen ? theme.colors.primary : '#fff' },
            ]}
            onPress={() => navigation.navigate('HomeTabs')}
          />
        </View>

        <View style={styles.loginFormContainer}>
          {/* Email input */}
          <InputField
            id="Email"
            placeHolder="Email"
            icon={emailIcon}
            inputFieldStyle={[{ marginBottom: 50 }, styles.inputFieldStyle]}
            text={email}
            setText={setEmail}
            activeField={activeField}
            setActiveField={setActiveField}
          />

          {/* Passowrd input */}
          <InputField
            id="Password"
            placeHolder="Password"
            icon={passwordIcon}
            inputFieldStyle={styles.inputFieldStyle}
            text={password}
            setText={setPassword}
            secureTextEntry
            activeField={activeField}
            setActiveField={setActiveField}
          />

          {/* Forgot password button */}
          <Button
            height={formItemHeight}
            text="Forgot password"
            backgroundColor="transparent"
            style={styles.forgotPasswordBtn}
            textStyle={styles.forgotPasswordBtnText}
            onPress={() => navigation.navigate('ResetPasswordScreen')}
          />

          {/* Log in button */}
          <Button
            width={formWidth}
            height={formItemHeight}
            text="Log in"
            backgroundColor="#BB6BD9"
            style={styles.loginBtn}
            textStyle={styles.loginBtnText}
            onPress={onLoginPressed}
          />

          {/** Separator */}
          <View
            style={{
              width: formWidth,
              marginTop: 12,
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: '#A5A5A5' }} />
            <View>
              <Text
                style={{ color: '#A5A5A5', width: 50, textAlign: 'center' }}
              >
                Or
              </Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: '#A5A5A5' }} />
          </View>

          {/* Sign up button */}
          <Button
            width={formWidth}
            height={formItemHeight}
            text="Sign up"
            backgroundColor="#fff"
            style={styles.signUpBtn}
            textStyle={styles.signUpBtnText}
            onPress={() => navigation.navigate('RegisterScreen')}
          />
        </View>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    position: 'absolute',
    top: 0,
    flex: 1,
    flexDirection: 'row',
  },
  loginFormContainer: {
    width: '80%',
    height: '50%',
    position: 'absolute',
    bottom: 60,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  welcomeMessage: {
    color: 'white',
    fontSize: 30,
    marginTop: '10%',
    marginLeft: '5%',
    fontWeight: '700',
  },
  skipBtn: {
    margin: '4%',
    position: 'absolute',
    top: 10,
    right: 0,
  },
  skipBtnText: {
    color: '#fff',
    fontStyle: 'italic',
    fontSize: 19,
  },
  inputFieldStyle: {
    height: '9%',
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: '#BB6BD9',
  },
  forgotPasswordBtn: {
    alignSelf: 'flex-end',
  },
  forgotPasswordBtnText: {
    color: '#BB6BD9',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 15,
  },
  loginBtn: {
    marginTop: 12,
    borderRadius: 7,
  },
  loginBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
  signUpBtn: {
    marginTop: 12,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#A5A5A5',
  },
  signUpBtnText: {
    color: '#A5A5A5',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})
