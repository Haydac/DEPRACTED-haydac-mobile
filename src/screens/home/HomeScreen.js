import React, { useState, useRef, useCallback, useMemo } from 'react'
import {
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import Checkbox from 'expo-checkbox'
import Constants from 'expo-constants'
import {
  BottomSheetModalProvider,
  BottomSheetModal,
  BottomSheetBackdrop,
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet'
import Flag from 'react-native-flags'

import Screen from '../../components/core/Screen'
import MiddleTabs from '../../components/MiddleTabs'
import SearchBar from '../../components/SearchBar'
import Categories from '../../components/Categories'
import BusinessAd from '../../components/BusinessAd'
import BusinessItem from '../../components/BusinessItem'
import { theme } from '../../core/theme'

import { demoStores } from '../../data/demoStores'
import { demoRestaurants } from '../../data/demoRestaurants'
import { demoServices } from '../../data/demoServices'

import { Fontisto, AntDesign, FontAwesome } from '@expo/vector-icons'

export const demoBusinesses = [
  ...demoStores,
  ...demoRestaurants,
  ...demoServices,
].sort(() => Math.random() - 0.5)

export default function HomeScreen({ navigation }) {
  const [businessData, setBusinessData] = useState(demoBusinesses)
  const [city, setCity] = useState('Toronto')
  const [activeTab, setActiveTab] = useState('Near me')
  const [isLoading, setLoading] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState('ASIA-India')

  const bottomSheetModalRef = useRef(null)
  const snapPoints = useMemo(() => ['30%', '60%', '90%'], [])
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present()
  }, [])
  const handleSheetChanges = useCallback((index) => {}, [])
  const backdropComponent = useCallback(
    (props) => (
      <BottomSheetBackdrop
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        {...props}
      />
    ),
    []
  )

  const regions = [
    {
      name: 'ASIA-India',
      countryCode: 'IN',
      isSelected: true,
    },
    {
      name: 'AFRICA-Ghana',
      countryCode: 'GH',
      isSelected: false,
    },
    {
      name: 'NORTH AMERICA-Jamaica',
      countryCode: 'JM',
      isSelected: false,
    },
    {
      name: 'AFRICA-Nigeria',
      countryCode: 'NG',
      isSelected: false,
    },
    {
      name: 'ASIA-China',
      countryCode: 'CN',
      isSelected: false,
    },
    {
      name: 'AFRICA-Ethiopia',
      countryCode: 'ET',
      isSelected: false,
    },
  ]

  // section header
  const SectionHeader = ({ title }) => (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  )

  const onLocationButtonPressed = () => {
    navigation.navigate('LocationScreen')
  }
  const onReigonButtonPressed = () => {
    handlePresentModalPress()
  }

  return (
    <BottomSheetModalProvider>
      <Screen style={styles.container}>
        {/* Header: ---- locationButton ---- regionButton */}
        <View style={styles.header}>
          <View style={styles.locationButton}>
            <TouchableOpacity
              style={styles.locationButtonInner}
              onPress={onLocationButtonPressed}
            >
              <Text>95 The Pond Road</Text>
              <AntDesign
                style={{ marginLeft: 5 }}
                name="down"
                size={15}
                color="#000"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.regionButton}>
            <TouchableOpacity onPress={onReigonButtonPressed}>
              <Fontisto name="earth" size={40} color="#eee" />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <SearchBar
            width="100%"
            height={45}
            placeHolder="Search stores, services or restaurants"
            searchBarOuterStyle={styles.searchBarOuterStyle}
            searchBarColor="#eee"
            iconRightColor="#4F4F4F"
            iconRight={<FontAwesome name="search" size={20} color="#4F4F4F" />}
            renderIconLeft={false}
            renderIconRight={true}
          />
          <BusinessAd
            style={styles.businessAdStyle}
            image_url={require('../../assets/data/restaurants/ad/demoRestaurantAd.png')}
          />
          <Categories />
          <MiddleTabs
            style={styles.middleTabsStyle}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {isLoading && (
            <ActivityIndicator
              size="large"
              color={theme.colors.primary}
              style={styles.activityIndicator}
            />
          )}
          <BusinessItem businessData={businessData} navigation={navigation} />
        </ScrollView>
        {/* Location sheet modal */}
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          animateOnMount={true}
          enablePanDownToClose={true}
          keyboardBehavior="extend"
          handleIndicatorStyle={{
            backgroundColor: theme.colors.primary,
            width: 70,
          }}
          handleStyle={{ backgroundColor: '#F9FAFB', borderRadius: 10 }}
          backdropComponent={backdropComponent}
          onChange={handleSheetChanges}
        >
          <BottomSheetScrollView>
            <SectionHeader title="Regions" />
            {regions.map((region, index) => {
              return (
                <View key={index} style={styles.regionContainer}>
                  <Flag
                    style={styles.regionFlag}
                    code={region.countryCode}
                    size={32}
                  />
                  <Text style={styles.regionText}>{region.name}</Text>
                  <Checkbox
                    style={styles.checkbox}
                    value={selectedRegion === region.name}
                    onValueChange={(value) => {
                      setSelectedRegion(region.name)
                    }}
                    color={
                      selectedRegion == region.name
                        ? theme.colors.primary
                        : undefined
                    }
                  />
                </View>
              )
            })}
          </BottomSheetScrollView>
        </BottomSheetModal>
      </Screen>
    </BottomSheetModalProvider>
  )
}

const headerOffsetPadding = 10

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  scrollView: {
    backgroundColor: '#eee',
  },
  header: {
    width: '100%',
    height: 90,
    zIndex: 100,
    marginTop: -Constants.statusBarHeight,
    paddingTop: headerOffsetPadding,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DECCEC',
  },
  locationButton: {
    width: 188,
    height: 35,
    position: 'absolute',
    bottom: headerOffsetPadding,
    justifyContent: 'center',
    borderRadius: 30,
    backgroundColor: '#eee',
  },
  locationButtonInner: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  regionButton: {
    position: 'absolute',
    right: 20,
    bottom: headerOffsetPadding,
  },
  searchBarOuterStyle: {
    paddingVertical: 10,
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  businessAdStyle: {
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  middleTabsStyle: {
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  activityIndicator: {
    marginTop: 2,
    marginBottom: 6,
  },
  regionContentContainer: {
    backgroundColor: '#fff',
  },
  sectionHeaderContainer: {
    backgroundColor: '#fff',
    padding: 6,
  },
  sectionHeaderText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  regionContainer: {
    height: 56,
    margin: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 23,
    backgroundColor: '#eee',
  },
  regionFlag: {
    marginLeft: 20,
    marginRight: 10,
  },
  regionText: {
    flex: 2,
    fontWeight: 'normal',
    fontSize: 16,
  },
  checkbox: {
    margin: 8,
    marginRight: 20,
    borderRadius: 10,
  },
})
