import React, { useState, useEffect } from 'react'
import { ScrollView, Alert, ActivityIndicator, StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { BUSINESS_CATEGORY_ID } from '@env'
import Screen from '../../components/core/Screen'
import SearchBar from '../../components/SearchBar'
import BusinessItem from '../../components/BusinessItem'
import Item from '../../components/business/item'
import BusinessAd from '../../components/BusinessAd'
import { demoStores, testBusinesses } from '../../data/demoStores'
import { theme } from '../../core/theme'
import { useDispatch, useSelector, connect } from 'react-redux'
import { fetchBusinessesbyCategory } from '../../redux/business/businessActions'

export default function GroceryStoresScreen({ navigation }) {
  const dispatch = useDispatch()
  const businessCategoryID = `${BUSINESS_CATEGORY_ID}`
  const [businessData, setBusinessData] = useState(testBusinesses)
  const [isLoading, setLoading] = useState(false)

  const [data, setData] = useState(null)

  useEffect(async () => {
    const fetchData = async () => {
      dispatch(await fetchBusinessesbyCategory(businessCategoryID))
    }

    fetchData()

    // clean up function
    return () => {}
  }, [businessCategoryID])

  // might give an infinite call to the api
  const updatedData = useSelector((state) => {
    //console.log(state.businesses.businessArray)
    state.businesses.businessArray
  })

  useEffect(() => {
    setData(updatedData)
  }, [updatedData])

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

// export default connect(mapStateToProps)(GroceryStoresScreen)
