import React, { useRef, useState } from 'react'
import {
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
} from 'react-native'
import Constants from 'expo-constants'

import Screen from '../../components/core/Screen'
import MiddleTabs from '../../components/MiddleTabs'
import SearchBar from '../../components/SearchBar'
import Categories from '../../components/Categories'
import BusinessAd from '../../components/BusinessAd'
import BusinessItem from '../../components/BusinessItem'
import { theme } from '../../core/theme'

import { demoStores } from '../../data/demoStores'
import { demoRestaurants } from '../../data/demoRestaurants'
import { demoServices } from '../../data/demoServices'
import { TouchableOpacity } from 'react-native-gesture-handler'

import { Fontisto, Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons'

export const demoBusinesses = [
  ...demoStores,
  ...demoRestaurants,
  ...demoServices,
].sort(() => Math.random() - 0.5)

export default function HomeScreen({ navigation }) {
  const [businessData, setBusinessData] = useState(demoBusinesses)
  const [city, setCity] = useState('Toronto')
  const [activeTab, setActiveTab] = useState('Near me')
  const [isLoading, setLoading] = useState(false)

  return (
    <Screen style={styles.container}>
      {/* Header: ---- search ---- regionButton */}
      <View style={styles.header}>
        <View style={styles.locationButton}>
          <TouchableOpacity style={styles.locationButtonInner}>
            <Text style={{ marginRight: 6 }}>95 The Pond Road</Text>
            <AntDesign name="down" size={15} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.regionButton}>
          <TouchableOpacity>
            <Fontisto name="earth" size={40} color="#eee" />
          </TouchableOpacity>
        </View>
      </View>
      <SearchBar
        width="95%"
        height={45}
        placeHolder="Search stores, services or restaurants"
        searchBarOuterStyle={styles.searchBarOuterStyle}
        searchBarColor="#eee"
        iconRightColor="#4F4F4F"
        iconRight={<FontAwesome name="search" size={20} color="#4F4F4F" />}
        renderIconLeft={false}
        renderIconRight={true}
      />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <BusinessAd
          image_url={require('../../assets/data/restaurants/ad/demoRestaurantAd.png')}
        />
        <Categories />
        <MiddleTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {isLoading && (
          <ActivityIndicator
            size="large"
            color={theme.colors.primary}
            style={styles.activityIndicator}
          />
        )}
        <BusinessItem businessData={businessData} />
      </ScrollView>
    </Screen>
  )
}

const headerOffsetPadding = 10

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  scrollView: {
    backgroundColor: '#eee',
  },
  header: {
    height: 90,
    marginTop: -Constants.statusBarHeight,
    paddingTop: headerOffsetPadding,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DECCEC',
  },
  locationButton: {
    width: 188,
    height: 35,
    position: 'absolute',
    bottom: headerOffsetPadding,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#eee',
  },
  locationButtonInner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  regionButton: {
    position: 'absolute',
    right: 20,
    bottom: headerOffsetPadding,
  },
  searchBarOuterStyle: {
    marginVertical: theme.constants.verticalCardMargin,
    alignSelf: 'center',
  },
  activityIndicator: {
    marginTop: 2,
    marginBottom: 6,
  },
})
