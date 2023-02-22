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
import { GROCERY_ID } from '@env'
import Screen from '../../components/core/Screen'
import SearchBar from '../../components/SearchBar'
import BusinessItem from '../../components/BusinessItem'
import Item from '../../components/business/item'
import BusinessAd from '../../components/BusinessAd'
import { demoStores, testBusinesses } from '../../data/demoStores'
import { theme } from '../../core/theme'
import { useDispatch, useSelector, connect } from 'react-redux'
import { fetchBusinessesbyCategory } from '../../redux/business/businessActions'
import { View } from 'react-native'

export default function GroceryStoresScreen({ navigation }) {
  const dispatch = useDispatch()
  const businessCategoryID = `${GROCERY_ID}`
  const [lastRefreshTime, setLastRefreshTime] = useState(Date.now())

  // refresh logic
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLastRefreshTime(Date.now())
    }, 1000 * 60 * 5) // refresh every 5 minutes

    return () => clearInterval(intervalId) // clear the interval when the component unmounts
  }, []) // run the effect only once, when the component mounts

  /**
   * Dispatch action to fetch the businesses from server
   */
  useEffect(async () => {
    const fetchData = async () => {
      dispatch(await fetchBusinessesbyCategory(businessCategoryID))
    }
    fetchData()
  }, [])

  /**
   * Connects to the redux store to retrieve state
   * called whenver component is rendered and an action is dispatched
   */
  const groceryStores = useSelector((state) => state.business.groceryStores)

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

      <View>
        <Text>Last refresh: {new Date(lastRefreshTime).toLocaleString()}</Text>
        <Button
          title="Refresh now"
          onPress={() => setLastRefreshTime(Date.now())}
        />
        {/* issue here */}
        {/* {groceryStores && Object.keys(groceryStores).length > 0 ? (
          <Text>First grocery store: {Object.keys(groceryStores)[0]}</Text>
        ) : (
          <Text>Loading grocery stores...</Text>
        )} */}
        {groceryStores &&
          Object.keys(groceryStores).map((id) => (
            <View key={id} style={{ paddingBottom: 20 }}>
              <Text>{id}</Text>
              <Text>{groceryStores[id].name}</Text>
              <Text>{groceryStores[id].description}</Text>
            </View>
          ))}
      </View>
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
