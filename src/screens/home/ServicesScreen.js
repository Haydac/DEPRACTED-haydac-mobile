import React, { useRef, useState, useEffect } from 'react'
import { ScrollView, Alert, ActivityIndicator, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import Screen from '../../components/core/Screen'
import SearchBar from '../../components/SearchBar'
import BusinessItem from '../../components/BusinessItem'
import BusinessAd from '../../components/BusinessAd'
import { demoServices } from '../../data/demoServices'
import { theme } from '../../core/theme'

export default function ServicesScreen({ navigation }) {
  const [businessData, setBusinessData] = useState(demoServices)
  const [isLoading, setLoading] = useState(false)

  /**
   * Dispatch action to fetch the businesses from server
   */
  useEffect(async () => {
    const fetchData = async () => {
      dispatch(await fetchBusinessesbyCategory('service'))
    }
    fetchData()
  }, [])

  /**
   * Retrive restaurant state from the redux store
   * TODO: render returned data
   */
  const services = useSelector((state) => state.business.restaurants)

  return (
    <Screen style={styles.container}>
      {/* Header: ---- search ---- filterButton */}
      <SearchBar
        width="87%"
        placeHolder="Search services"
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
        {isLoading && (
          <ActivityIndicator
            size="large"
            color={theme.colors.primary}
            style={styles.activityIndicator}
          />
        )}
        <BusinessItem businessData={businessData} navigation={navigation} />
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
