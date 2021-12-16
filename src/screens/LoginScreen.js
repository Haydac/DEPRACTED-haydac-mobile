import React, { useState } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native'
import { Text } from 'react-native-paper'
// import Background from '../components/Background'
// import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
// import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
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
        {/* back button here */}
        {/* <BackButton goBack={navigation.goBack} /> */}

        {/* Header text */}
        <View
          style={{
            // backgroundColor: 'red',
            flexDirection: 'row',
            width: '85%',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            bottom: '50%',
          }}
        >
          <Header style={{ color: 'white', fontSize: 30, marginTop: '10%' }}>
            Welcome{'\n'}Back!
          </Header>
          <TouchableOpacity onPress={() => navigation.replace('Home')}>
            {/* <Text>Skip</Text> */}
            <Header
              style={{
                fontSize: 19,
                marginTop: '20%',
                color: 'white',
                fontStyle: 'italic',
                textDecorationLine: 'underline',
              }}
            >
              Skip
            </Header>
          </TouchableOpacity>
        </View>

        {/* Email Input */}
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          style={styles.body}
        />

        {/* Password Input */}
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          style={styles.body}
          secureTextEntry
        />

        {/* Forgot password link */}
        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPasswordScreen')}
          >
            <Text style={styles.forgot}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login button */}
        {/* <Button
          mode="contained"
          onPress={onLoginPressed}
          style={[styles.button]}
        >
          Login
        </Button> */}
        <Button
          btnText="Log in"
          btnColor="#BB6BD9"
          btnTextColor="white"
          onPress={onLoginPressed}
        />

        {/* Sign up link */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 4,
            bottom: '-10%',
            width: '100%',
          }}
        >
          <Text>Don’t have an account? </Text>
          <TouchableOpacity
            onPress={() => navigation.replace('RegisterScreen')}
          >
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  backgroundContainer: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },
  body: {
    position: 'relative',
    top: '110%',
    // borderColor: 'rgba(0, 0, 0, .5)',
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
    top: '9.5%',
    right: '2%',
  },

  button: {
    backgroundColor: '#BB6BD9',
    position: 'absolute',
    height: '5%',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '80%',
    top: '88%',
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
