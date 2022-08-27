import React, { useRef, useState } from 'react'
import { ScrollView, Alert, ActivityIndicator, StyleSheet } from 'react-native'

import Screen from '../../components/core/Screen'
import BusinessItem from '../../components/BusinessItem'
import { theme } from '../../core/theme'
import { demoBusinesses } from '../../screens/home/HomeScreen'

export default function FavoritesScreen({ navigation }) {
  const [businessData, setBusinessData] = useState(demoBusinesses)
  const [isLoading, setLoading] = useState(false)

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
  activityIndicator: {
    marginTop: 2,
    marginBottom: 6,
  },
})
