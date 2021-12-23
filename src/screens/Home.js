import React, { useRef } from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Animated,
} from 'react-native'
import { Text } from 'react-native-paper'
import MiddleTabs from '../components/MiddleTabs'
import Button from '../components/Button'
import SearchBar from '../components/SearchBar'
import AddressBar from '../components/AddressBar'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Categories from '../components/Categories'
import DemarcationLine from '../components/DemarcationLine'
import BusinessAd from '../components/BusinessAd'
import Businesses from '../components/BusinessScreen'

export default function Home({ navigation }) {
  const CurrentLocationButton = (props) => {
    const { location } = props // this is the current location of user
    return (
      // eslint-disable-next-line react/jsx-no-bind
      <Pressable
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'AddressPage' }],
          })
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              // marginRight: 8,
              backgroundColor: '#EAEAEA',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              width: '50%',
              left: '250%',
            }}
          >
            {/* text should be dynamic */}
            <Text
              size={15}
              style={{
                fontSize: 12,
                marginLeft: 12,
              }}
            >
              105 THE POND ROAD
            </Text>
            <AntDesign
              name="down"
              size={15}
              style={{
                justifyContent: 'center',
                marginRight: 6,
                marginLeft: 8,
              }}
            />
          </View>
        </TouchableOpacity>
      </Pressable>
    )
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#D9BAF1', flex: 1 }}>
      {/* address bar/button? - clickable and will lead to search, also contains recent location */}
      <CurrentLocationButton />
      {/* sidebar */}
      {/* globe to choose location */}
      <View style={{ backgroundColor: '#fff', marginTop: '2%' }}>
        {/* search bar */}
        <SearchBar
          title="Search stores, services or restaurants"
          icon="search"
          length="85%"
        />

        {/* Categories */}
        <Categories />

        {/* business advetisement in location */}
        <BusinessAd />

        {/* middle tabs */}
        <MiddleTabs />

        {/* businesses pages */}
        {/* <Businesses /> */}

        {/* bottom navbar */}
      </View>
    </SafeAreaView>
  )
}

// const styles = StyleSheet.create({
//   button: {
//     position: 'absolute',
//     justifyContent: 'center',
//     left: '5%',
//     right: '5%',
//     top: '170%',
//   },
// })
