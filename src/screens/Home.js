import React, { useRef, useState } from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
  Pressable,
  useFonts,
  Animated,
} from 'react-native'
import { Divider, Text, Provider } from 'react-native-paper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

/* Screen Imports */
import LocationScreen from './LocationScreen'

/* Components Import */
import MiddleTabs from '../components/MiddleTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import BusinessAd from '../components/BusinessAd'
import BottomTabs from '../components/BottomTabs'
// import LocationButton from '../components/LocationButton' COMMENT: replace built in function with this
import MenuIcon from '../components/MenuIcon'
import GlobeIcon from '../components/GlobeIcon'

// const sheetRef = React.useRef(null)

export default function Home() {
  const [city, setCity] = useState('Toronto')
  const [visibility, setVisibility] = useState(false)

  // this will set to state to true and make the BS visible
  const TempLocationButton = () => {
    return (
      <Pressable
        onPress={() => {
          setVisibility(true)
          // console.log('visibility: ', visibility)
        }}
      >
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#EAEAEA',
              padding: 9,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              width: 'auto',
              height: 'auto',
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
    <Provider>
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

          {/* <LocationButton /> */}
          <TempLocationButton />

          <GlobeIcon />
        </View>

        {/* BODY OF THE PAGE */}
        <ScrollView vertical>
          <View
            style={{ backgroundColor: '#fff', marginTop: '2%', zIndex: 0.5 }}
          >
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

        <LocationScreen
          show={visibility}
          onDismiss={() => {
            setVisibility(false)
          }}
        />

        <View style={{ backgroundColor: '#fff' }}>
          <Divider width={1} />
          <BottomTabs />
        </View>
      </SafeAreaView>
    </Provider>
  )
}
