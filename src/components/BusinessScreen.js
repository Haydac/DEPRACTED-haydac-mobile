import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import DemarcationLine from './DemarcationLine'

const item = [
  {
    key: 1,
    image: require('../assets/businessesImages/afrospiceImage.png'),
    text: 'Afro Spice Chophouse',
  },
  {
    key: 2,
    image: require('../assets/businessesImages/tiplestoreImage.png'),
    text: 'Tripplee African and Caribbean market',
  },
]

export default function Business({ businesses = item }) {
  return (
    <View>
      <ScrollView vertical>
        {/* loop starts here */}
        {businesses.map((business, index) => (
          <View style={styles.card} key={business.key}>
            <Image style={styles.image} source={business.image} />
            <Text style={styles.text}>{business.text}</Text>
            <DemarcationLine />
          </View>
        ))}
        {/* loop ends here */}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    // justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
    marginBottom: '2%',
  },
  image: {
    width: '98%',
    // justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  text: {
    fontWeight: '600',
    marginTop: '2%',
    position: 'relative',
    // backgroundColor: 'red',
    width: '90%',
    alignSelf: 'center',
  },
})
