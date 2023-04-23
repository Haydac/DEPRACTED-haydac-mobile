import React, { useEffect, useState } from 'react'
import {
  ScrollView,
  Alert,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Screen from '../../components/core/Screen'
import BusinessItem from '../../components/BusinessItem'
import { theme } from '../../core/theme'
import { demoBusinesses } from '../../screens/home/HomeScreen'
import { fetchFavourites } from '../../redux/favourites/favouriteActions'

export default function FavoritesScreen({ navigation }) {
  // const [businessData, setBusinessData] = useState(demoBusinesses)
  const [isLoading, setLoading] = useState(false)
  const dispatch = useDispatch()

  /**
   * Dispatch action to fetch the favourited businesses
   */
  useEffect(async () => {
    const fetchData = async () => {
      dispatch(await fetchFavourites('user_id'))
    }
    fetchData()
  }, [])

  /**
   * Connects to the redux store to retrieve state
   * called whenver component is rendered and an action is dispatched
   */
  // const favouritedBusinesses = useSelector(
  //   (state) => state.favouritedBusinesses.favourites
  // )

  const { favouritedBusinesses, isLoggedIn } = useSelector((state) => ({
    favouritedBusinesses: state.favouritedBusinesses.favourites,
    isLoggedIn: state.user.isLoggedIn,
  }))

  return (
    <Screen style={styles.container}>
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
        {favouritedBusinesses.length > 0 ? (
          <BusinessItem
            businessData={favouritedBusinesses}
            navigation={navigation}
          />
        ) : isLoggedIn ? (
          <Text style={styles.noDataMessage}>
            You have not favourited any businesses yet
          </Text>
        ) : (
          <Text style={styles.noDataMessage}>
            Login to add business to favourites
          </Text>
        )}
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
  activityIndicator: {
    marginTop: 2,
    marginBottom: 6,
  },
})
