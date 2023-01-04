import { useState, useEffect } from 'react'
import { StyleSheet, View, Keyboard, Text, Alert } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Screen from '../../components/core/Screen'
import Header from '../../components/text/Header'
import Button from '../../components/buttons/Button'
import InputField from '../../components/forms/InputField'
import Separator from '../../components/Separator'
import store from '../../redux/store'
import { theme } from '../../core/theme'

import { login, loginApi } from '../../api/AuthProvider'
import {
  onValidLogin,
  emailValidator,
  passwordValidator,
} from '../../helpers/authValidation'
import userActions from '../../redux/user/userActions'
import { useDispatch } from 'react-redux'
import { backgroundSvg } from '../../components/core/Brand'
import { fetchBusinesses } from '../../redux/business/businessActions'
import authReducers from '../../redux/auth/authReducers'
import { loginAction, registerAction } from '../../redux/auth/authActions'

export default function LoginScreen({ navigation }) {
  // Alert/pop-up functionality when user app runs into errors
  const displayMessage = (title, message) =>
    Alert.alert(title, message, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'OK' },
    ])

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState({})
  const [loginError, setLoginError] = useState('')
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
    setErrors({ ...errors, message: '' })
  }

  const handleError = (errorMessage, formField) => {
    setErrors((prevErrors) => ({ ...prevErrors, [formField]: errorMessage }))
  }

  const clearError = () => {
    setErrors({ ...errors, password: '', email: '' })
  }

  const dispatch = useDispatch()

  const handleSubmit = async () => {
    Keyboard.dismiss()
    clearError() // clear all input errors

    const { email, password } = formValues

    let validation = true

    if (email.length == 0) {
      handleError('Email is required!', 'email')
      validation = false
    } else if (!emailValidator(email)) {
      handleError('Invalid email address', 'email')
      validation = false
    }

    if (password.length == 0) {
      handleError('Password is required!', 'password')
      validation = false
    } else if (!passwordValidator(password)) {
      handleError('Password must be of length 6', 'password')
      validation = false
    }

    /**
     * Validates input and sends form values to the server
     */
    if (validation) {
      if (onValidLogin(formValues)) {
        try {
          // using redux to handle login
          store.dispatch(loginAction(formValues))

          // navigate user to home screen
          navigation.navigate('HomeTabs')
        } catch (error) {
          // should be an alert
          displayMessage('Something went wrong', 'restart the app')
        }
      }
    } else {
      throw 'Unable to validate login form input'
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
      style={styles.container}
      svg={isKeyboardVisible ? null : backgroundSvg('200%', '45%')}
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

        {/* Error messages */}
        <View
          style={{
            color: 'red',
            marginBottom: 50,
            fontStyle: 'italic',
            fontWeight: 500,
          }}
        >
          <Text>{errors.message}</Text>
        </View>

        <View
          style={[
            styles.loginFormContainer,
            isKeyboardVisible ? { bottom: 70 } : {},
          ]}
        >
          <Text style={{ color: theme.colors.error }}>{loginError}</Text>
          {/* Email input */}
          <InputField
            width={formWidth}
            height={formItemHeight}
            id="Email"
            placeHolder="Email"
            placeholderTextColor="#9E9E9E"
            leftIcon={emailIcon}
            autoCapitalize="none"
            inputFieldStyle={[{ marginBottom: 40 }, styles.inputFieldStyle]}
            text={formValues.email}
            setText={(text) =>
              updateFormValue(text.toLowerCase().replace(/\s/g, ''), 'email')
            }
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
            onPress={handleSubmit}
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
            onPress={() => navigation.navigate('SignupScreen')}
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    margin: '7%',
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
