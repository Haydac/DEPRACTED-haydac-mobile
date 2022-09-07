import React, { useState } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import Screen from '../../components/core/Screen'
import InputField from '../../components/forms/InputField'
import Desgin from '../../assets/background/design-icon.svg'
import Reset from '../../assets/background/reset.svg'
import Button from '../../components/buttons/Button'

import { theme } from '../../core/theme' //provides theme/design for the componenet

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('')

  //button states
  const [loginBtnColor, setLoginBtnColor] = useState('#fff')
  const [loginBtnTextColor, setLoginBtnTextColor] = useState('white')

  const formWidth = '80%'
  const formItemHeight = 45

  const handleResetPassword = () => {
    // call reset API
  }

  return (
    <Screen style={styles.container}>
      <Text style={styles.instructions}>
        Please enter a recovery email ID/Phone.
      </Text>

      <Text style={styles.pageinstructions}>
        A link would be send to the email entered to activate{'\n'}
        the create a new password option.
      </Text>

      {/* <View style={styles.designsvg}>
        <Desgin />
      </View> */}

      {/* <View style={styles.resetsvg}>
        <Reset />
      </View> */}

      <Button
        text="next"
        textColor={loginBtnTextColor}
        backgroundColor={loginBtnColor}
        style={styles.nextbtn}
        textStyle={styles.NextbtnText}
        onPress={() => console.log('hi')}
      />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    textAlign: 'center',
  },

  //place the svg at the bottom right of the screen
  designsvg: {
    alignItems: 'flex-end',
    borderStyle: 'solid',
    justifyContent: 'flex-end',
    width: '100%',
    height: '104.2%',
    marginLeft: '-0.1%',
    position: 'absolute',
  },

  //display the icon for this page in the center
  resetsvg: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '60%',
    position: 'absolute',
  },
  //place text on screen
  instructions: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    color: 'black',
    marginLeft: '20%',
    marginTop: '90%',
  },
  //place other set of instuctions on screen
  pageinstructions: {
    textAlign: 'center',
    justifyContent: 'center',
    position: 'absolute',
    color: 'black',
    marginLeft: '15%',
    marginTop: '100%',
    fontSize: 12,
  },

  //place and design the button
  nextbtn: {
    marginTop: 600,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    position: 'absolute',
    marginLeft: '23%',
    height: 45,
    width: '50.62%',
    backgroundColor: '#BB6BD9',
  },
  //text for the utton
  NextbtnText: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})
