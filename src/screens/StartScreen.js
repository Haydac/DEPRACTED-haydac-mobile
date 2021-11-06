import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import {  fa-arrow-right } from '@fortawesome/free-solid-svg-icons'
import Button from '../components/Button'
import Logo from '../components/Logo'
import Background from '../components/Background'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo style={[styles.image]} />
      <Text style={[styles.basetext]}>
        Bring Home closer with a single click...
      </Text>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('LoginScreen')}
        style={[styles.button]}
      >
        Get Started
      </Button>
      <FontAwesomeIcon icon={faArrowRight} style={[styles.iconPos]} />
    </Background>
  )
}

const styles = StyleSheet.create({
  image: {
    top: '-20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    width: 336,
    alignItems: 'center',
    top: '90%',
    justifyContent: 'center',
    height: '48',
    borderRadius: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
  basetext: {
    fontFamily: 'Nexa-Bold',
    top: '-15%',
  },
  iconPos: {
    position: 'absolute',
    top: '91.5%',
    right: '10%',
  },
})
