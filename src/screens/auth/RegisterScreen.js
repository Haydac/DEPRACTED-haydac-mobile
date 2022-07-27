import { useState, useEffect } from 'react'
import { StyleSheet, View, Keyboard } from 'react-native'
import { Text } from 'react-native-paper'
import { MaterialIcons } from '@expo/vector-icons'
import { emailValidator } from '../../helpers/emailValidator'
import { passwordValidator } from '../../helpers/passwordValidator'
import { nameValidator } from '../../helpers/nameValidator'

import Screen from '../../components/core/Screen'
import Header from '../../components/text/Header'
import Button from '../../components/buttons/Button'
import InputField from '../../components/forms/InputField'
import Background from '../../components/core/Background'
import { theme } from '../../core/theme'

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [activeField, setActiveField] = useState('')

  const emailIcon = (
    <MaterialIcons
      name="email"
      color={activeField == 'Email' ? '#BB6BD9' : '#A5A5A5'}
      size={16}
    />
  )

  const phoneIcon = (
    <MaterialIcons
      name="phone"
      color={activeField == 'Phone' ? '#BB6BD9' : '#A5A5A5'}
      size={20}
    />
  )

  const passwordIcon = (
    <MaterialIcons
      name="lock"
      color={activeField == 'Password' ? '#BB6BD9' : '#A5A5A5'}
      size={20}
    />
  )

  const passwordConfirmIcon = (
    <MaterialIcons
      name="lock"
      color={activeField == 'PasswordConfirm' ? '#BB6BD9' : '#A5A5A5'}
      size={20}
    />
  )

  const formWidth = '100%'
  const formItemHeight = 45
  const formSpacing = 20

  const onSignUpPressed = () => {
    // TODO: Anjola
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    console.log('Sign up button pressed')
    navigation.navigate('LoginScreen')
  }

  // Keyboard listener
  // TODO: maybe there is a way to refactor into a component

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
      imageSource={
        isKeyboardOpen ? null : require('../../assets/background/login.png')
      }
    >
      <Screen>
        <View style={styles.content}>
          {/* Login header :  */}
          <View style={styles.header}>
            {isKeyboardOpen ? null : (
              <Header style={styles.headerMessage}>Create{'\n'}Account</Header>
            )}
            <Button
              width="6%"
              height="5%"
              text="Skip"
              style={styles.skipBtn}
              textStyle={styles.skipBtnText}
              textColor={isKeyboardOpen ? theme.colors.primary : '#fff'}
              onPress={() => navigation.navigate('HomeTabs')}
            />
          </View>

          <View style={styles.loginFormContainer}>
            {/* Email input */}
            <InputField
              id="Email"
              placeHolder="Email"
              icon={emailIcon}
              inputFieldStyle={[
                { marginBottom: formSpacing },
                styles.inputFieldStyle,
              ]}
              text={email}
              setText={setEmail}
              activeField={activeField}
              setActiveField={setActiveField}
            />

            {/* Address input */}
            <InputField
              id="Phone"
              placeHolder="Phone number"
              icon={phoneIcon}
              inputFieldStyle={[
                { marginBottom: formSpacing },
                styles.inputFieldStyle,
              ]}
              text={address}
              setText={setAddress}
              activeField={activeField}
              setActiveField={setActiveField}
            />

            {/* Passowrd input */}
            <InputField
              id="Password"
              placeHolder="Password"
              icon={passwordIcon}
              inputFieldStyle={[
                { marginBottom: formSpacing },
                styles.inputFieldStyle,
              ]}
              text={password}
              setText={setPassword}
              secureTextEntry
              activeField={activeField}
              setActiveField={setActiveField}
            />

            {/* Passowrd confirmation input */}
            <InputField
              id="PasswordConfirm"
              placeHolder="Confirm Password"
              icon={passwordConfirmIcon}
              inputFieldStyle={[{ marginBottom: 7 }, styles.inputFieldStyle]}
              text={passwordConfirm}
              setText={setPasswordConfirm}
              secureTextEntry
              activeField={activeField}
              setActiveField={setActiveField}
            />

            {/* Forgot password button */}
            <Button
              height={formItemHeight}
              text="Forgot password?"
              style={styles.forgotPasswordBtn}
              textStyle={styles.forgotPasswordBtnText}
              textColor={theme.colors.primary}
              onPress={() => navigation.navigate('ResetPasswordScreen')}
            />

            {/* Sign up button */}
            <Button
              width={formWidth}
              height={formItemHeight}
              text="Sign up"
              backgroundColor={theme.colors.primary}
              backgroundColorPressed="#fff"
              style={styles.signUpBtn}
              textStyle={styles.signUpBtnText}
              textColor="#fff"
              onPress={onSignUpPressed}
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
              <View
                style={{ flex: 1, height: 1, backgroundColor: '#A5A5A5' }}
              />
              <View>
                <Text
                  style={{ color: '#A5A5A5', width: 50, textAlign: 'center' }}
                >
                  Or
                </Text>
              </View>
              <View
                style={{ flex: 1, height: 1, backgroundColor: '#A5A5A5' }}
              />
            </View>

            {/* Sign up button */}
            <Button
              width={formWidth}
              height={formItemHeight}
              text="Log in"
              backgroundColor="#fff"
              backgroundColorPressed={theme.colors.primary}
              style={styles.loginBtn}
              textStyle={styles.loginBtnText}
              textColor="#A5A5A5"
              onPress={() => navigation.navigate('LoginScreen')}
            />
          </View>
        </View>
      </Screen>
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
  headerMessage: {
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
    fontStyle: 'italic',
    fontSize: 19,
  },
  inputFieldStyle: {
    height: '9%',
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary,
  },
  forgotPasswordBtn: {
    alignSelf: 'flex-end',
  },
  forgotPasswordBtnText: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: 15,
  },
  loginBtn: {
    marginTop: 12,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  loginBtnText: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
  signUpBtn: {
    marginTop: 12,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  signUpBtnText: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})
