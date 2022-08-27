import React, { useRef, useState } from 'react'
import { ScrollView, Alert, ActivityIndicator, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import Screen from '../../components/core/Screen'
import SearchBar from '../../components/SearchBar'
import BusinessItem from '../../components/BusinessItem'
import BusinessAd from '../../components/BusinessAd'
import { demoStores } from '../../data/demoStores'
import { theme } from '../../core/theme'

export default function GroceryStoresScreen({ navigation }) {
  const [businessData, setBusinessData] = useState(demoStores)
  const [isLoading, setLoading] = useState(false)

  return (
    <Screen style={styles.container}>
      {/* Header: menuButton  ---- search ---- filterButton */}
      <SearchBar
        width="87%"
        height={45}
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
        <BusinessAd
          image_url={require('../../assets/data/stores/ad/demoStoresAd.png')}
        />
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
    paddingTop: 0,
    backgroundColor: '#fff',
  },
  scrollView: {
    backgroundColor: '#eee',
  },
  searchBarOuterStyle: {
    marginBottom: theme.constants.verticalCardMargin,
    alignSelf: 'center',
  },
  activityIndicator: {
    marginTop: 2,
    marginBottom: 6,
  },
})
