// get all businesses that chooses to be advertised and store them in an object
// display all the businesses in a card that slides
import React from 'react'
import { View, Text, Image } from 'react-native'
import DemarcationLine from './DemarcationLine'

export default function BusinessAd() {
  return (
    <View>
      <DemarcationLine />
      <View>
        <Image source={require('../assets/advertisement.png')} />
      </View>
      <DemarcationLine />
    </View>
  )
}
