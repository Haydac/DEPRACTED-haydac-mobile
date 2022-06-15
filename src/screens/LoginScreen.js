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
import Icon from 'react-native-vector-icons/FontAwesome'
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
              marginTop: '15%',
              fontWeight: '700',
            }}
          >
            Welcome{'\n'}Back!
          </Header>
          <TouchableOpacity onPress={() => navigation.replace('Home')}>
            <Header
              style={{
                fontSize: 19,
                color: 'white',
                fontStyle: 'italic',
              }}
            >
              Skip
            </Header>
          </TouchableOpacity>
        </View>

        {/* Email Input */}
        <View
          style={[
            styles.row,
            {
              marginBottom: 40,
              marginTop: 200,
              // backgroundColor: 'red',
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
              // backgroundColor: 'blue',
              width: '80%',
            }}
          />
          {/* text container */}
          <View
            style={[
              styles.body,
              {
                // backgroundColor: 'blue',
                width: '80%',
              },
            ]}
          >
            <TextInput
              style={[
                {
                  width: '94%',
                  alignSelf: 'flex-start',
                  // backgroundColor: 'red',
                  left: '9%',
                  top: '25%',
                },
              ]}
              placeholder="Email Address/Phone Number"
            />
          </View>
        </View>
        {/* <Icon
          name="envelope"
          color="#BB6BD9"
          size={18}
          style={[
            {
              position: 'absolute',
              justifyContent: 'flex-start',
              // backgroundColor: 'blue',
              width: '95%',
              top: '50.5%',
            },
          ]}
        />
        <TextInput
          style={[styles.body, { marginBottom: 50, marginTop: 200 }]}
          placeholder="Email Address or Phone Number"
        /> */}

        {/* Passowrd Input */}
        <View
          style={[styles.row, { marginBottom: 40, justifyContent: 'center' }]}
        >
          <Icon
            name="lock"
            color="#BB6BD9"
            size={18}
            style={{
              top: '50%',
              position: 'absolute',
              justifyContent: 'flex-start',
              // backgroundColor: 'blue',
              zIndex: 2,
              width: '80%',
            }}
          />
          {/* text container */}
          <View
            style={[
              styles.body,
              {
                // backgroundColor: 'blue',
                width: '80%',
              },
            ]}
          >
            <TextInput
              style={[
                {
                  width: '94%',
                  alignSelf: 'flex-start',
                  // backgroundColor: 'red',
                  left: '9%',
                  top: '25%',
                },
              ]}
              placeholder="Password"
            />
          </View>
        </View>

        {/* Login button */}
        <Button
          btnText="Login"
          btnColor="#BB6BD9"
          btnTextColor="white"
          btnTop="3%"
          onPress={onLoginPressed}
        />

        {/* Forgot password link */}
        <View
          style={[
            styles.forgotPassword,
            styles.row,
            { marginTop: '15%', justifyContent: 'center' },
          ]}
        >
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
        <View style={[styles.row, { justifyContent: 'center' }]}>
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
    width: '100%',
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
    // textDecorationLine: 'underline',
  },
  row: {
    position: 'relative',
    flexDirection: 'row',
    marginTop: '5%',
    width: '90%',
    justifyContent: 'flex-start',
  },
})

// old text input

/* <TextInput
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
        /> */

/* Password Input */

/* <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          style={styles.body}
          secureTextEntry
        /> */
