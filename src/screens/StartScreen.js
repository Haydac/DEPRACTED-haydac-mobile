import React from 'react'
import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Dimensions,
} from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import Button from '../components/Button'
import Logo from '../components/Logo'

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background_dot.png')}
        resizeMode="cover"
        style={styles.image}
      >
        <Logo />
        <Text style={[styles.welcomeText]}>
          Bring home closer with a {'\n'} single click...
        </Text>
        <Button
          width="80%"
          height="5%"
          text="Get Started"
          borderRadius={10}
          backgroundColor="#fff"
          style={styles.getStartedBtn}
          textStyle={styles.getStartedBtnText}
          icon={
            <FontAwesome5
              style={styles.iconStyle}
              name="arrow-right"
              size={20}
            />
          }
          onPress={() => navigation.replace('LoginScreen')}
        />
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
  getStartedBtn: {
    position: 'absolute',
    top: Dimensions.get('window').height - 50,
    bottom: 0,
  },
  getStartedBtnText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
  welcomeText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 22,
    top: '-11%',
  },
  iconStyle: {
    color: 'black',
  },
})
