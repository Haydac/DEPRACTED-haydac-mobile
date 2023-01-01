import React, { useState, useEffect } from 'react'
import { ScrollView, Alert, ActivityIndicator, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import Screen from '../../components/core/Screen'
import SearchBar from '../../components/SearchBar'
import BusinessItem from '../../components/BusinessItem'
import Item from '../../components/business/item'
import BusinessAd from '../../components/BusinessAd'
import { demoStores, testBusinesses } from '../../data/demoStores'
import { theme } from '../../core/theme'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchBusinesses,
  fetchBusinessesbyCategory,
} from '../../redux/business/businessActions'

export default function GroceryStoresScreen({ navigation }) {
  const [businessData, setBusinessData] = useState(testBusinesses)
  const [isLoading, setLoading] = useState(false)

  // why isnt it working: trying to reteive businesses stored in Actions
  const dispatch = useDispatch()
  // const { businesses, loading, error } = useSelector(
  //   (state) => state.businesses
  // )

  dispatch(fetchBusinessesbyCategory('6310f43df6a262ad457f181c'))
  // console.log('here')
  // console.log(businesses)

  return (
    <Screen style={styles.container}>
      {/* Header: menuButton  ---- search ---- filterButton */}
      <SearchBar
        width="87%"
        placeHolder="Search stores"
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
        {/* Businesses are displayed here */}
        {isLoading && (
          <ActivityIndicator
            size="large"
            color={theme.colors.primary}
            style={styles.activityIndicator}
          />
        )}
        {/* <BusinessItem businessData={businessData} navigation={navigation} /> */}
        <Item businessData={businessData} navigation={navigation} />
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  scrollView: {
    backgroundColor: '#eee',
  },
  searchBarOuterStyle: {
    marginTop: 10,
    marginBottom: theme.constants.verticalCardMargin,
    alignSelf: 'center',
  },
  activityIndicator: {
    marginTop: 2,
    marginBottom: 6,
  },
})
