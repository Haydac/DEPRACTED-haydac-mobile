import React, { useState, useEffect } from 'react'
import {
  ScrollView,
  Alert,
  ActivityIndicator,
  StyleSheet,
  Text,
  Button,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import Screen from '../../components/core/Screen'
import SearchBar from '../../components/SearchBar'
import BusinessItem from '../../components/BusinessItem'
import { demoStores, testBusinesses } from '../../data/demoStores'
import { theme } from '../../core/theme'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBusinessesbyCategory } from '../../redux/business/businessActions'

export default function GroceryStoresScreen({ navigation }) {
  const dispatch = useDispatch()
  const [isLoading, setLoading] = useState(false)

  /**
   * Dispatch action to fetch the businesses from server
   */
  useEffect(async () => {
    const fetchData = async () => {
      //dispatch(await fetchBusinessesbyCategory('grocery'))
    }
    fetchData()
  }, [])

  /**
   * Connects to the redux store to retrieve state
   * called whenver component is rendered and an action is dispatched
   */
  const groceryStores = useSelector((state) =>
    state.business.allBusinesses.business.filter((object) =>
      object.name.toLowerCase().includes('grocery')
    )
  )

  return (
    <Screen style={styles.container}>
      {/* Header: menuButton  ---- search ---- filterButton */}

      {/* Search bar */}
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
        {isLoading && (
          <ActivityIndicator
            size="large"
            color={theme.colors.primary}
            style={styles.activityIndicator}
          />
        )}
        <BusinessItem businessData={groceryStores} navigation={navigation} />
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
