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

import { Fontisto, Ionicons, AntDesign } from '@expo/vector-icons'

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
        <TouchableOpacity style={styles.locationButton}>
          <Ionicons name="location" size={20} color={theme.colors.primary} />
          <Text>Current location</Text>
          <AntDesign name="down" size={15} color="#000" />
        </TouchableOpacity>
        <View style={styles.regionButton}>
          <TouchableOpacity>
            <Fontisto name="earth" size={40} color="#eee" />
          </TouchableOpacity>
        </View>
      </View>
      <SearchBar
        width="90%"
        placeHolder="Search stores, services or restaurants"
        searchBarOuterStyle={styles.searchBarOuterStyle}
        searchBarColor="#eee"
        iconLeftColor="gray"
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

const headerOffsetPadding = Constants.statusBarHeight + 6

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  scrollView: {
    backgroundColor: '#eee',
  },
  header: {
    height: 86,
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
    padding: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#eee',
  },
  regionButton: {
    paddingTop: headerOffsetPadding,
    position: 'absolute',
    right: 20,
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
