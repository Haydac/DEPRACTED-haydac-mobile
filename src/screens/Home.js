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
import AntDesign from 'react-native-vector-icons/AntDesign'
import MiddleTabs from '../components/MiddleTabs'
// import Button from '../components/Button'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
// import DemarcationLine from '../components/DemarcationLine'
import BusinessAd from '../components/BusinessAd'
import BottomTabs from '../components/BottomTabs'
// import Businesses from '../components/BusinessScreen'

export default function Home({ navigation }) {
  // This is the button for the current location of the user
  const CurrentLocationButton = (props) => {
    // get the current location of user and display it
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
            style={
              {
                // alignItems: 'center',
                // backgroundColor: 'violet',
              }
            }
          >
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
          </View>
        </TouchableOpacity>
      </Pressable>
    )
  }

  // menu icon - button to bring up slide par -> slide left
  const MenuIcon = () => {
    return (
      <Pressable>
        <TouchableOpacity>
          <View
            style={
              {
                // alignItems: 'flex-start',
                // width: 95,
                // backgroundColor: 'red',
              }
            }
          >
            <View
              style={{
                // marginLeft: 30,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon
                name="bars"
                size={16}
                color="#000"
                style={{
                  position: 'absolute',
                  alignItems: 'center',
                  marginLeft: 50,
                  zIndex: 20,
                  width: '50%',
                }}
              />
              <Icon name="circle" size={35} color="#F2F2F2" />
            </View>
          </View>
        </TouchableOpacity>
      </Pressable>
    )
  }

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
          // marginBottom: '4%',
        }}
      >
        <MenuIcon />

        {/* address bar/button? - clickable and will lead to search, also contains recent location */}
        <CurrentLocationButton />

        <GlobeIcon />
      </View>

      {/* BODY OF THE PAGE */}

      <View style={{ backgroundColor: '#fff', marginTop: '2%' }}>
        {/* search bar */}
        <SearchBar
          title="Search stores, services or restaurants"
          icon="search"
          length="85%"
        />

        {/* Whole section is scrollable */}
        <ScrollView vertical>
          {/* Categories */}
          <Categories />

          {/* business advetisement in location */}
          <BusinessAd />

          {/* middle tabs */}
          <MiddleTabs />
        </ScrollView>
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
