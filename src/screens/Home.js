import React, { useRef } from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Animated,
} from 'react-native'

import { Divider, Text } from 'react-native-paper'

// import AddressBar from '../components/AddressBar'
import Icon from 'react-native-vector-icons/FontAwesome'

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import MiddleTabs from '../components/MiddleTabs'
// import Button from '../components/Button'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
// import DemarcationLine from '../components/DemarcationLine'
import BusinessAd from '../components/BusinessAd'
import BottomTabs from '../components/BottomTabs'
import MenuIcon from '../components/MenuIcon'
import LocationButton from '../components/LocationButton'
import { NavigationContainer } from '@react-navigation/native'

// import Businesses from '../components/BusinessScreen'

export default function Home({ navigation }) {
  // button to change location
  const GlobeIcon = () => {
    return (
      <Pressable>
        {/* globe to choose location, wrap in a pressable */}
        <TouchableOpacity>
          <View>
            <Icon name="globe" size={30} color="#F2F2F2" />
          </View>
        </TouchableOpacity>
      </Pressable>
    )
  }

  return (
    <SafeAreaView style={{ backgroundColor: '#D9BAF1', flex: 1 }}>
      {/* header tab view */}
      <View
        style={{
          // backgroundColor: 'blue',
          flexDirection: 'row',
          // width: '100%',
          justifyContent: 'space-around',
          alignItems: 'center',
          // marginTop: '2%',
          marginBottom: '0.5%',
        }}
      >
        <MenuIcon />

        {/* address bar/button? - clickable and will lead to search, also contains recent location */}
        <LocationButton />

        <GlobeIcon />
      </View>

      {/* BODY OF THE PAGE */}
      <ScrollView vertical>
        <View style={{ backgroundColor: '#fff', marginTop: '2%', zIndex: 0.5 }}>
          {/* Whole section is scrollable */}
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
        </View>
      </ScrollView>
      <View style={{ backgroundColor: '#fff' }}>
        <Divider width={1} />
        <BottomTabs />
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
