import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

// the api will have a key that will specify if it is a grocery store or not
// depending on the button/icon that is pressed,
// the content on the page will be determined based on the button pressed

const items = [
  {
    key: 1,
    image: require('../assets/categories/grocery.png'),
    text: 'Grocery Stores',
    drawer: 'GroceryStoresScreen',
  },
  {
    key: 2,
    image: require('../assets/categories/restaurant.png'),
    text: 'Restaurants',
    drawer: 'RestaurantsScreen',
  },
  {
    key: 3,
    image: require('../assets/categories/services.png'),
    text: 'Services',
    drawer: 'ServicesScreen',
  },
]

export default function Categories() {
  const navigation = useNavigation()

  return (
    <View style={[styles.content, { flexDirection: 'row' }]}>
      {/* loop starts here */}
      {items.map((item, index) => (
        <Pressable
          style={{ alignItems: 'center', marginLeft: 25, marginRight: 30 }}
          key={item.key}
          onPress={() => navigation.navigate(item.drawer)}
        >
          <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
          </View>
          <Text style={styles.text}>{item.text}</Text>
        </Pressable>
      ))}
      {/* loop ends here */}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    position: 'relative',
    justifyContent: 'space-around',
  },
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
