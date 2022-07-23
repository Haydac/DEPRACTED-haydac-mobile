import React, { useRef, useState } from 'react'
import { ScrollView, Alert, ActivityIndicator, StyleSheet } from 'react-native'

import Screen from '../../components/core/Screen'
import BusinessItem from '../../components/BusinessItem'
import { theme } from '../../core/theme'
import { demoBusinesses } from '../../screens/home/HomeScreen'

const randomFiveSubset = demoBusinesses.slice(0, 5)

export default function FavoritesScreen({ navigation }) {
  const [businessData, setBusinessData] = useState(randomFiveSubset)
  const [isLoading, setLoading] = useState(false)

  return (
    <Screen style={styles.container}>
      {/* Header: menuButton  ---- search ---- regionButton */}
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
  activityIndicator: {
    marginTop: 2,
    marginBottom: 6,
  },
})
