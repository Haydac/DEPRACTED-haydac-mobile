import React, { useRef, useState } from 'react'
import { ScrollView, Alert, ActivityIndicator, StyleSheet } from 'react-native'

import Screen from '../../components/core/Screen'
import SearchBar from '../../components/SearchBar'
import BusinessItem from '../../components/BusinessItem'
import { theme } from '../../core/theme'
import { demoStores } from '../../data/demoStores'
import BusinessAd from '../../components/BusinessAd'

export default function GroceryStoresScreen({ navigation }) {
  const [businessData, setBusinessData] = useState(demoStores)
  const [isLoading, setLoading] = useState(false)

  return (
    <Screen style={styles.container}>
      {/* Header: menuButton  ---- search ---- regionButton */}
      <SearchBar
        width="90%"
        placeHolder="Search stores"
        searchBarOuterStyle={styles.searchBarOuterStyle}
        searchBarColor="#eee"
        iconLeftColor="gray"
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
    marginVertical: theme.constants.verticalCardMargin,
    paddingVertical: 10,
    alignSelf: 'center',
  },
  activityIndicator: {
    marginTop: 2,
    marginBottom: 6,
  },
})
