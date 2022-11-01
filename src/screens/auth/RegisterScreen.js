import { useState, useEffect } from 'react'
import { StyleSheet, View, Keyboard, Alert } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import Screen from '../../components/core/Screen'
import Header from '../../components/text/Header'
import Button from '../../components/buttons/Button'
import InputField from '../../components/forms/InputField'
import Separator from '../../components/Separator'

import { theme } from '../../core/theme'

import {
  nameValidator,
  passwordValidator,
  emailValidator,
  onValidSignup,
} from '../../helpers/authValidation'
import userActions from '../../redux/user/userActions'
import { useDispatch } from 'react-redux'

export default function RegisterScreen({ navigation }) {
  // Alert/pop-up functionality when user app runs into errors
  const displayMessage = (title, message) =>
    Alert.alert(title, message, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'OK' },
    ])

  // button states
  const [signUpBtnColor, setSignUpBtnColor] = useState(theme.colors.primary)
  const [signUpBtnTextColor, setSignUpBtnTextColor] = useState('#fff')

  const [loginBtnColor, setLoginBtnColor] = useState('#fff')
  const [loginBtnTextColor, setLoginBtnTextColor] = useState('#A5A5A5')

  const activeIconColor = theme.colors.primary
  const inactiveIconColor = '#A5A5A5'

  // icons
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

  // why is this shit here???
  const formWidth = '100%'
  const formItemHeight = 45

  const [formValues, setFormValues] = useState({
    fullname: '',
    email: '',
    address: '',
    password: '',
    password_confirmation: '',
  })
  const [errors, setErrors] = useState({})
  const [activeField, setActiveField] = useState('')

  /**
   *
   * @param {*} value - String
   * @param {*} formField - String
   */
  const updateFormValue = (value, formField) => {
    setFormValues((prevValues) => ({ ...prevValues, [formField]: value }))
  }

  /**
   *
   * @param {*} errorMessage  - String
   * @param {*} formField  - String
   */
  const handleError = (errorMessage, formField) => {
    setErrors((prevErrors) => ({ ...prevErrors, [formField]: errorMessage }))
  }
  const dispatch = useDispatch()
  /**
   * Performs frontend validation
   */
  const handleSubmit = async () => {
    Keyboard.dismiss()

    const { fullname, email, address, password, password_confirmation } =
      formValues

    let validation = true

    // perform frontend validation
    if (fullname.length == 0) {
      handleError('Name is required!', 'fullname')
      validation = false
    } else if (!nameValidator(fullname)) {
      handleError('Invalid type for name', 'fullname')
      validation = false
    }

    if (email.length == 0) {
      handleError('Email is required!', 'email')
      validation = false
    } else if (!emailValidator(email)) {
      handleError('Invalid email address!', 'email')
      validation = false
    }

    if (address.length == 0) {
      handleError('Address is required!', 'address')
      validation = false
    }

    if (password.length == 0) {
      handleError('Password is required!', 'password')
      validation = false
    } else if (!passwordValidator(password)) {
      handleError('Password must be of length 6!', 'password')
      validation = false
    }

    if (password != password_confirmation) {
      handleError("Passwords don't match!", 'password_confirmation')
      validation = false
    }

    if (validation) {
      const registerRequest = {
        fullname: fullname,
        email: email,
        address: address,
        password: password,
        password_confirmation: password_confirmation,
      }

      /**
       * Validates input and sends form values to the server
       */
      if (onValidSignup(registerRequest)) {
        try {
          const user = await userActions.register(registerRequest, dispatch)
          if (user.success) {
            navigation.navigate('HomeTabs')
          } else {
            // throw an alert that an error has occurred
            displayMessage('Error', 'An error occurred')
          }
        } catch (error) {
          // throw an error as alert
          displayMessage('Something went wrong', 'restart the app')
          throw error
        }
      } else {
        displayMessage('Validation failed', 'check form inputs')
      }
    } else {
      throw 'frontend validation failed'
    }
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
      imageSource={
        isKeyboardVisible ? null : require('../../assets/background/signup.png')
      }
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
            autoCapitalize="none"
            setText={(text) =>
              updateFormValue(text.toLowerCase().replace(/\s/g, ''), 'email')
            }
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
            setText={(text) => updateFormValue(text.trim(), 'password')}
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
            setText={(text) =>
              updateFormValue(text.trim(), 'password_confirmation')
            }
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
