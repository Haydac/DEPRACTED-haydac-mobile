import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

const items = [
  {
    key: 1,
    image: require('../assets/categories/grocery.png'),
    text: 'Grocery Stores',
  },
  {
    key: 2,
    image: require('../assets/categories/restaurant.png'),
    text: 'Restaurants',
  },
  {
    key: 3,
    image: require('../assets/categories/services.png'),
    text: 'Services',
  },
]

export default function Categories() {
  return (
    <View style={styles.content}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {/* loop starts here */}
        {items.map((item, index) => (
          <View
            style={{ alignItems: 'center', marginLeft: 25, marginRight: 30 }}
            key={item.key}
          >
            <View style={styles.item}>
              <Image source={item.image} style={styles.image} />
            </View>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
        {/* loop ends here */}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  content: { position: 'relative', marginTop: 60 },
  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  text: { fontSize: 10, marginTop: 4 },
  item: {
    shadowColor: 'black',
    borderColor: '#eee',
    borderWidth: 2,
    width: 70,
    height: 70,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
})
