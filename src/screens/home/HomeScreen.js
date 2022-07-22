import React, { useRef, useState } from 'react'
import { ScrollView, Alert, ActivityIndicator, StyleSheet } from 'react-native'

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
      {/* Header: menuButton  ---- search ---- regionButton */}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  scrollView: {
    backgroundColor: '#eee',
  },
  searchBarOuterStyle: {
    marginVertical: theme.constants.verticalCardMargin,
    paddingVertical: 10,
    alignSelf: 'center',
  },
  activityIndicator: {
    marginTop: 2,
    marginBottom: 6,
  },
})
