import React, { useState } from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  View,
  ImageBackground,
  TextInput,
} from 'react-native'
import { Text } from 'react-native-paper'
// import Background from '../components/Background'
// import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
// import TextInput from '../components/TextInput'
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
            // bottom: '0%',
          }}
        >
          <Header
            style={{
              color: 'white',
              fontSize: 30,
              marginTop: '10%',
              fontWeight: '700',
            }}
          >
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

        {/* <TextInput
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
        /> */}

        {/* Password Input */}
        {/* <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          style={styles.body}
          secureTextEntry
        /> */}

        {/* Email Input */}
        <TextInput
          style={[styles.body, { marginBottom: 50, marginTop: 200 }]}
          placeholder="Email Address or Phone Number"
        />
        <TextInput
          style={[
            styles.body,
            // color should change from prev color to C89DD9 when highlighted
            { marginBottom: 40 },
          ]}
          placeholder="Password"
        />

        {/* Login button */}
        <Button
          btnText="Log in"
          btnColor="#BB6BD9"
          btnTextColor="white"
          btnTop="7%"
          onPress={onLoginPressed}
        />

        {/* Forgot password link */}
        <View style={[styles.forgotPassword, styles.row, { marginTop: '30%' }]}>
          <Text>Forgot your password, click </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPasswordScreen')}
          >
            <Text style={[styles.link, { textDecorationLine: 'none' }]}>
              reset password
            </Text>
          </TouchableOpacity>
        </View>

        {/* Sign up link */}
        <View style={[styles.row]}>
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
    height: 30,
    margin: 1,
    borderWidth: 1,
    // padding: 10,
    borderColor: '#fff',
    borderBottomColor: '#BB6BD9',
    // position: 'relative',
    width: '85%',
    top: '2%',
    // borderColor: 'rgba(0, 0, 0, .5)',
  },
  forgotPassword: {
    position: 'relative',
    width: '85%',
    // backgroundColor: 'red',
    // alignItems: 'flex-start',
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
    color: '#0645AD',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  row: {
    position: 'relative',
    flexDirection: 'row',
    marginTop: '5%',
    width: '85%',
    justifyContent: 'center',
  },
})
