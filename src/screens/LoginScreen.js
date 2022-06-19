import React, { useState } from 'react'
import {
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
  Platform,
} from 'react-native'
import { Text } from 'react-native-paper'
import Constants from 'expo-constants'

import Icon from 'react-native-vector-icons/FontAwesome'
import Header from '../components/Header'
import Button from '../components/Button'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    console.log('Sign up button pressed')
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    // this sets what page to go to
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    })
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/login.png')}
        resizeMode="cover"
        style={styles.image}
      >
        {/* Login header :  */}
        <View style={styles.header}>
          <Header style={styles.welcomeMessage}>Welcome{'\n'}Back!</Header>
          <Button
            width="6%"
            height="5%"
            text="Skip"
            backgroundColor="transparent"
            style={styles.skipBtn}
            textStyle={styles.skipBtnText}
            onPress={() => navigation.replace('Home')}
          />
        </View>
        <View style={styles.loginFormContainer}>
          {/* Email input */}
          <View
            style={[
              {
                marginBottom: 40,
                marginTop: 200,
                justifyContent: 'center',
              },
            ]}
          >
            <Icon
              name="envelope"
              color="#BB6BD9"
              size={15}
              style={{
                top: '50%',
                position: 'absolute',
                justifyContent: 'flex-start',
                width: '10%',
              }}
            />
            {/* text container */}
            <View
              style={[
                styles.inputField,
                {
                  width: '100%',
                },
              ]}
            >
              <TextInput
                style={[
                  {
                    width: '100%',
                    alignSelf: 'flex-start',
                    left: '9%',
                    top: '25%',
                  },
                ]}
                placeholder="Email address/Phone number"
              />
            </View>
          </View>

          {/* Passowrd input */}
          <View style={[{ marginBottom: 40, justifyContent: 'center' }]}>
            <Icon
              name="lock"
              color="#BB6BD9"
              size={18}
              style={{
                top: '50%',
                position: 'absolute',
                justifyContent: 'flex-start',
                zIndex: 2,
                width: '10%',
              }}
            />
            {/* text container */}
            <View
              style={[
                styles.inputField,
                {
                  width: '100%',
                },
              ]}
            >
              <TextInput
                style={[
                  {
                    width: '100%',
                    alignSelf: 'flex-start',
                    left: '9%',
                    top: '25%',
                  },
                ]}
                secureTextEntry
                placeholder="Password"
                onFocus={() => textInputFocused(this)}
              />
            </View>
          </View>

          {/* Forgot password button */}
          <Button
            height="8%"
            text="Forgot password"
            backgroundColor="transparent"
            style={styles.forgotPasswordBtn}
            textStyle={styles.forgotPasswordBtnText}
            onPress={() => navigation.replace('ResetPasswordScreen')}
          />

          {/* Log in button */}
          <Button
            width="100%"
            height="8%"
            text="Log in"
            backgroundColor="#BB6BD9"
            style={styles.loginBtn}
            textStyle={styles.loginBtnText}
            onPress={onLoginPressed}
          />

          {/** Separator */}
          <View
            style={{
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
            width="100%"
            height="8%"
            text="Sign up"
            backgroundColor="#fff"
            style={styles.signUpBtn}
            textStyle={styles.signUpBtnText}
            onPress={() => navigation.replace('RegisterScreen')}
          />
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  header: {
    width: '100%',
    paddingVertical: Platform.OS === 'ios' ? 20 : Constants.statusBarHeight,
    flexDirection: 'row',
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
  loginFormContainer: {
    width: '80%',
    position: 'relative',
    flex: 3,
    flexDirection: 'column',
  },
  inputField: {
    position: 'relative',
    height: 30,
    margin: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#BB6BD9',
    width: '100%',
    top: '2%',
  },
  forgotPasswordBtn: {
    marginTop: -35,
    alignSelf: 'flex-end',
    borderRadius: 7,
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

function textInputFocused() {}
