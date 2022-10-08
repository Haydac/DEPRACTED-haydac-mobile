import { useState, useEffect } from 'react'
import { StyleSheet, View, Keyboard, ScrollView, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Screen from '../../components/core/Screen'
import Header from '../../components/text/Header'
import Button from '../../components/buttons/Button'
import InputField from '../../components/forms/InputField'
import Separator from '../../components/Separator'

import { theme } from '../../core/theme'

import { signup } from '../../api/AuthProvider'
import {
  addressValidator,
  nameValidator,
  emailValidator,
  passwordValidator,
} from '../../helpers/validation'
import { backgroundSvg } from '../../components/core/Brand'

export default function RegisterScreen({ navigation }) {
  const [formValues, setFormValues] = useState({
    fullname: '',
    email: '',
    address: '',
    password: '',
    password_confirmation: '',
  })
  const [errors, setErrors] = useState({})
  const [signUpError, setSignUpError] = useState('')
  const [activeField, setActiveField] = useState('')

  // button states
  const [signUpBtnColor, setSignUpBtnColor] = useState(theme.colors.primary)
  const [signUpBtnTextColor, setSignUpBtnTextColor] = useState('#fff')

  const [loginBtnColor, setLoginBtnColor] = useState('#fff')
  const [loginBtnTextColor, setLoginBtnTextColor] = useState('#A5A5A5')

  const activeIconColor = theme.colors.primary
  const inactiveIconColor = '#A5A5A5'

  const nameIcon = (
    <MaterialIcons
      name="person"
      color={activeField == 'Name' ? activeIconColor : inactiveIconColor}
      size={20}
    />
  )

  const emailIcon = (
    <MaterialIcons
      name="email"
      color={activeField == 'Email' ? activeIconColor : inactiveIconColor}
      size={17}
    />
  )

  const addressIcon = (
    <MaterialIcons
      name="location-pin"
      color={activeField == 'Address' ? activeIconColor : inactiveIconColor}
      size={20}
    />
  )

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

  const formWidth = '100%'
  const formItemHeight = 45

  const updateFormValue = (value, formField) => {
    setFormValues((prevValues) => ({ ...prevValues, [formField]: value }))
  }

  const handleError = (errorMessage, formField) => {
    setErrors((prevErrors) => ({ ...prevErrors, [formField]: errorMessage }))
  }

  const validate = ({
    fullname,
    email,
    address,
    password,
    password_confirmation,
  }) => {
    let isValid = true
    let nameError = nameValidator(fullname)
    let emailError = emailValidator(email)
    let addressError = addressValidator(address)
    let passwordError = passwordValidator(password)
    let passwordConfirmError = passwordValidator(password_confirmation)

    if (nameError) {
      handleError(nameError, 'fullname')
      isValid = false
    } else {
      handleError(undefined, 'fullname')
    }

    if (emailError) {
      handleError(emailError, 'email')
      isValid = false
    } else {
      handleError(undefined, 'email')
    }

    if (addressError) {
      handleError(addressError, 'address')
      isValid = false
    } else {
      handleError(undefined, 'address')
    }

    if (passwordError) {
      handleError(passwordError, 'password')
      isValid = false
    } else {
      handleError(undefined, 'password')
    }

    if (passwordConfirmError) {
      handleError(passwordConfirmError, 'password_confirmation')
      isValid = false
    } else {
      handleError(undefined, 'password_confirmation')
    }

    if (password !== password_confirmation) {
      handleError('Password fields should match', 'password_confirmation')
      isValid = false
    } else {
      handleError(undefined, 'password_confirmation')
    }

    return isValid
  }

  /**
   * Sends values from form to the server
   */
  const onSignUpPressed = async () => {
    setSignUpError('')
    Keyboard.dismiss()
    let emailInput = formValues.email.toLowerCase()
    const signUpRequest = {
      fullname: formValues.fullname,
      email: emailInput,
      address: formValues.address,
      password: formValues.password,
      password_confirmation: formValues.password_confirmation,
    }

    if (validate(signUpRequest)) {
      try {
        // passes signUpRequest to api
        const user = await signup(signUpRequest)

        if (user.success) {
          navigation.navigate('HomeTabs')
        } else {
          setSignUpError(user.message)
        }
      } catch (error) {
        setSignUpError('Unexpected error signing up')
      }
    }

    console.log(signUpError)
  }

  // Keyboard listener
  // TODO: maybe there is a way to refactor into a component
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
      svg={isKeyboardVisible ? null : backgroundSvg('200%', '25%')}
    >
      <View style={styles.content}>
        {/* Login header :  */}
        <View style={styles.header}>
          {isKeyboardVisible ? null : (
            <Header style={styles.headerMessage}>Create{'\n'}Account</Header>
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
            isKeyboardVisible ? { bottom: -20 } : {},
          ]}
        >
          <Text style={{ color: theme.colors.error }}>{signUpError}</Text>
          {/* Full name input */}
          <InputField
            id="Name"
            width={formWidth}
            height={formItemHeight}
            placeHolder="Full name"
            placeholderTextColor="#9E9E9E"
            leftIcon={nameIcon}
            inputFieldStyle={[styles.inputFieldStyle]}
            text={formValues.fullname}
            setText={(text) => updateFormValue(text, 'fullname')}
            error={errors.fullname}
            setActiveField={setActiveField}
            blurOnSubmit={false}
          />

          {/* Email input */}
          <InputField
            width={formWidth}
            height={formItemHeight}
            id="Email"
            placeHolder="Email"
            placeholderTextColor="#9E9E9E"
            leftIcon={emailIcon}
            inputFieldStyle={[{ marginBottom: 7 }, styles.inputFieldStyle]}
            text={formValues.email}
            setText={(text) => updateFormValue(text, 'email')}
            error={errors.email}
            activeField={activeField}
            setActiveField={setActiveField}
            blurOnSubmit={true}
          />

          {/* Address input */}
          <InputField
            id="Address"
            width={formWidth}
            height={formItemHeight}
            placeHolder="Address"
            placeholderTextColor="#9E9E9E"
            leftIcon={addressIcon}
            inputFieldStyle={[styles.inputFieldStyle]}
            text={formValues.address}
            setText={(text) => updateFormValue(text, 'address')}
            error={errors.address}
            setActiveField={setActiveField}
            blurOnSubmit={false}
          />

          {/* Passowrd input */}
          <InputField
            id="Password"
            width={formWidth}
            height={formItemHeight}
            placeHolder="Password"
            placeholderTextColor="#9E9E9E"
            leftIcon={passwordIcon}
            inputFieldStyle={[styles.inputFieldStyle]}
            text={formValues.password}
            setText={(text) => updateFormValue(text, 'password')}
            error={errors.password}
            secureTextEntry
            setActiveField={setActiveField}
            blurOnSubmit={false}
          />

          {/* Passowrd confirmation input */}
          <InputField
            id="PasswordConfirm"
            width={formWidth}
            height={formItemHeight}
            placeHolder="Confirm Password"
            placeholderTextColor="#9E9E9E"
            leftIcon={passwordConfirmIcon}
            inputFieldStyle={[styles.inputFieldStyle]}
            text={formValues.password_confirmation}
            setText={(text) => updateFormValue(text, 'password_confirmation')}
            error={errors.password_confirmation}
            secureTextEntry
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

          {/* Sign up button */}
          <Button
            text="Sign up"
            width={formWidth}
            height={formItemHeight}
            backgroundColor={signUpBtnColor}
            style={styles.signUpBtn}
            textStyle={styles.signUpBtnText}
            textColor={signUpBtnTextColor}
            onPress={onSignUpPressed}
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

          {/* Log in button */}
          <Button
            text="Log in"
            width={formWidth}
            height={formItemHeight}
            backgroundColor={loginBtnColor}
            style={styles.loginBtn}
            textStyle={styles.loginBtnText}
            textColor={loginBtnTextColor}
            onPress={() => navigation.navigate('LoginScreen')}
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
    marginVertical: 10,
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.primary,
  },
  emailPhoneFieldStyle: {
    marginVertical: 10,
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
