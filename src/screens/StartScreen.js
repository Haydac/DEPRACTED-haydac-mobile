import React from 'react'
import { StyleSheet, Text, ImageBackground, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Button from '../components/Button'
import Logo from '../components/Logo'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background_dot.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <Logo />
        <Text style={[styles.basetext]}>
          Bring home closer with a {'\n\t\t'} single click...
        </Text>
        <Button
          btnText="Get Started"
          btnTextColor="black"
          btnColor="#fff"
          btnTop="29.3%"
          onPress={() => navigation.replace('LoginScreen')}
        />

        <FontAwesomeIcon icon={faArrowRight} style={[styles.iconPos]} />
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
  container: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
  basetext: {
    // fontFamily: 'Nexa-Bold',
    fontSize: 22,
    top: '-11%',
  },
  iconPos: {
    position: 'absolute',
    top: '89.5%',
    right: '18%',
  },
})
