import { useState, useEffect } from 'react'
import { StyleSheet, View, Keyboard } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Screen from '../../components/core/Screen'
import Header from '../../components/text/Header'
import Button from '../../components/buttons/Button'
import InputField from '../../components/forms/InputField'
import Separator from '../../components/Separator'

import { theme } from '../../core/theme'

import { login } from '../../api/AuthProvider'
import { emailValidator, passwordValidator } from '../../helpers/validation'

export default function LoginScreen({ navigation }) {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({})
  const [activeField, setActiveField] = useState('')

  // button states
  const [signUpBtnColor, setSignUpBtnColor] = useState(theme.colors.primary)
  const [signUpBtnTextColor, setSignUpBtnTextColor] = useState('#fff')

  const [loginBtnColor, setLoginBtnColor] = useState('#fff')
  const [loginBtnTextColor, setLoginBtnTextColor] = useState('#A5A5A5')

  const activeIconColor = theme.colors.primary
  const inactiveIconColor = '#A5A5A5'

  const emailIcon = (
    <MaterialIcons
      name="email"
      color={activeField == 'Email' ? activeIconColor : inactiveIconColor}
      size={17}
    />
  )

  const passwordIcon = (
    <MaterialIcons
      name="lock"
      color={activeField == 'Password' ? activeIconColor : inactiveIconColor}
      size={20}
    />
  )

  const formWidth = '100%'
  const formItemHeight = 45

  const updateFormValue = (value, formField) => {
    setFormValues((prevValues) => ({ ...prevValues, [formField]: value }))
  }

  const handleError = (errorMessage, formField) => {
    setErrors((prevErrors) => ({ ...prevErrors, [formField]: errorMessage }))
  }

  const validate = ({ email, password }) => {
    let isValid = true
    let emailError = emailValidator(email)
    let passwordError = passwordValidator(password)

    if (emailError) {
      handleError(emailError, 'email')
      isValid = false
    } else {
      handleError(undefined, 'email')
    }

    if (passwordError) {
      handleError(passwordError, 'password')
      isValid = false
    } else {
      handleError(undefined, 'password')
    }

    return isValid
  }

  const onLoginPressed = async () => {
    Keyboard.dismiss()
    let emailInput = formValues.email.toLowerCase()
    const loginRequest = { email: emailInput, password: formValues.password }

    if (validate(loginRequest)) {
      try {
        // passes loginRequest to api
        const user = await login(loginRequest)
        if (user.success) {
          navigation.navigate('HomeTabs')
        }
      } catch (error) {
        console.warn(error)
      }
    }
  }

  const [isKeyboardVisible, setKeyboardVisible] = useState(false)

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true) // or some other action
      }
    )
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false) // or some other action
      }
    )

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [])

  return (
    <Screen
      imageSource={
        isKeyboardVisible ? null : require('../../assets/background/login.png')
      }
    >
      <View style={styles.content}>
        {/* Login header :  */}
        <View style={styles.header}>
          {isKeyboardVisible ? null : (
            <Header style={styles.headerMessage}>Welcome{'\n'}Back!</Header>
          )}
          <Button
            text="Skip"
            width="6%"
            height="5%"
            style={styles.skipBtn}
            textStyle={styles.skipBtnText}
            textColor={isKeyboardVisible ? theme.colors.primary : '#fff'}
            onPress={() => navigation.navigate('HomeTabs')}
          />
        </View>

        <View
          style={[
            styles.loginFormContainer,
            isKeyboardVisible ? { bottom: 70 } : {},
          ]}
        >
          {/* Email input */}
          <InputField
            width={formWidth}
            height={formItemHeight}
            id="Email"
            placeHolder="Email"
            placeholderTextColor="#9E9E9E"
            leftIcon={emailIcon}
            inputFieldStyle={[{ marginBottom: 40 }, styles.inputFieldStyle]}
            text={formValues.email}
            setText={(text) => updateFormValue(text, 'email')}
            error={errors.email}
            activeField={activeField}
            setActiveField={setActiveField}
            blurOnSubmit={true}
          />

          {/* Passowrd input */}
          <InputField
            width={formWidth}
            height={formItemHeight}
            id="Password"
            placeHolder="Password"
            placeholderTextColor="#9E9E9E"
            leftIcon={passwordIcon}
            inputFieldStyle={[{ marginBottom: 7 }, styles.inputFieldStyle]}
            text={formValues.password}
            setText={(text) => updateFormValue(text, 'password')}
            error={errors.password}
            secureTextEntry
            activeField={activeField}
            setActiveField={setActiveField}
            blurOnSubmit={true}
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
            blurOnSubmit={false}
          />
        </View>
      </View>
    </Screen>
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
    borderBottomColor: theme.colors.primary,
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
