import { useState, useEffect } from 'react'
import { StyleSheet, View, Keyboard } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Screen from '../../components/core/Screen'
import Header from '../../components/text/Header'
import Button from '../../components/buttons/Button'
import InputField from '../../components/forms/InputField'
import Background from '../../components/core/Background'
import Separator from '../../components/Separator'
import EmailPhoneField from '../../components/forms/EmailPhoneField'

import { theme } from '../../core/theme'

import { login } from '../../api/AuthProvider'
import { loginValidator } from '../../helpers/validation'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [activeField, setActiveField] = useState('')

  // button states
  const [signUpBtnColor, setSignUpBtnColor] = useState(theme.colors.primary)
  const [signUpBtnTextColor, setSignUpBtnTextColor] = useState('#fff')

  const [loginBtnColor, setLoginBtnColor] = useState('#fff')
  const [loginBtnTextColor, setLoginBtnTextColor] = useState('#A5A5A5')

  const passwordIcon = (
    <MaterialIcons
      name="lock"
      color={activeField == 'Password' ? '#BB6BD9' : '#A5A5A5'}
      size={20}
    />
  )

  const formWidth = '100%'
  const formItemHeight = 45

  const onLoginPressed = async () => {
    // could be email or phone
    let emailinput = email.toLowerCase()
    const formValues = { phone: phone, email: emailinput, password: password }
    if (loginValidator(formValues)) {
      // passes formvalues to api
      const user = await login(formValues)
      if (user.success) {
        navigation.navigate('HomeTabs')
      }
    }
  }

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
              <Header style={styles.headerMessage}>Welcome{'\n'}Back!</Header>
            )}
            <Button
              text="Skip"
              width="6%"
              height="5%"
              style={styles.skipBtn}
              textStyle={styles.skipBtnText}
              textColor={isKeyboardOpen ? theme.colors.primary : '#fff'}
              onPress={() => navigation.navigate('HomeTabs')}
            />
          </View>

          <View style={styles.loginFormContainer}>
            {/* Email/Phone input */}
            <EmailPhoneField
              width={formWidth}
              height={formItemHeight}
              emailPhoneFieldStyle={styles.emailPhoneFieldStyle}
              inputFieldStyle={styles.inputFieldStyle}
              setActiveField={setActiveField}
              dropDownStyle={styles.dropDownStyle}
              dropDownContainerStyle={styles.dropDownContainerStyle}
              dropDownTextStyle={styles.dropDownTextStyle}
              dropDownLabelStyle={styles.dropDownLabelStyle}
            />

            {/* Passowrd input */}
            <InputField
              width={formWidth}
              height={formItemHeight}
              id="Password"
              placeHolder="Password"
              leftIcon={passwordIcon}
              inputFieldStyle={[{ marginBottom: 7 }, styles.inputFieldStyle]}
              text={password}
              setText={setPassword}
              secureTextEntry
              activeField={activeField}
              setActiveField={setActiveField}
            />

            {/* Forgot password button */}
            <Button
              text="Forgot password?"
              height={formItemHeight}
              style={styles.forgotPasswordBtn}
              textStyle={styles.forgotPasswordBtnText}
              textColor={theme.colors.primary}
              onPress={() => navigation.navigate('ResetPasswordScreen')}
            />

            {/* Log in button */}
            <Button
              text="Log in"
              width={formWidth}
              height={formItemHeight}
              backgroundColor={signUpBtnColor}
              style={styles.signUpBtn}
              textStyle={styles.signUpBtnText}
              textColor={signUpBtnTextColor}
              onPress={onLoginPressed}
              onPressIn={() => {
                setSignUpBtnColor('#fff')
                setSignUpBtnTextColor('#A5A5A5')

                setLoginBtnColor(theme.colors.primary)
                setLoginBtnTextColor('#fff')
              }}
              onPressOut={() => {
                setSignUpBtnColor(theme.colors.primary)
                setSignUpBtnTextColor('#fff')

                setLoginBtnColor('#fff')
                setLoginBtnTextColor('#A5A5A5')
              }}
            />

            {/** Separator */}
            <Separator
              width={formWidth}
              text="Or"
              lineColor="#A5A5A5"
              textColor="#A5A5A5"
              style={{ marginTop: 12 }}
            />

            {/* Sign up button */}
            <Button
              text="Sign up"
              width={formWidth}
              height={formItemHeight}
              backgroundColor={loginBtnColor}
              style={styles.loginBtn}
              textStyle={styles.loginBtnText}
              textColor={loginBtnTextColor}
              onPress={() => navigation.navigate('RegisterScreen')}
              onPressIn={() => {
                setLoginBtnColor(theme.colors.primary)
                setLoginBtnTextColor('#fff')

                setSignUpBtnColor('#fff')
                setSignUpBtnTextColor('#A5A5A5')
              }}
              onPressOut={() => {
                setLoginBtnColor('#fff')
                setLoginBtnTextColor('#A5A5A5')

                setSignUpBtnColor(theme.colors.primary)
                setSignUpBtnTextColor('#fff')
              }}
            />
          </View>
        </View>
      </Screen>
    </Background>
  )
}

const styles = StyleSheet.create({
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
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: '#BB6BD9',
  },
  emailPhoneFieldStyle: {
    marginVertical: 50,
  },
  dropDownStyle: {
    borderColor: theme.colors.primary,
  },
  dropDownContainerStyle: {
    width: 60,
    height: 28,
    marginTop: -4,
    alignSelf: 'flex-start',
  },
  dropDownTextStyle: {
    color: '#fff',
  },
  dropDownLabelStyle: {
    color: '#fff',
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
