import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { theme } from '../../core/theme'

/**
 * This should take in an object of businesses
 * @param {} param0
 * @returns
 */
export default function Item(prop) {
  const { businessData, navigation } = prop
  //   console.log('come here start')
  //   console.log(businessData)
  console.log('from item file')
  console.log(prop)

  return (
    <View>
      {/* you're iterating in a wrong way */}
      {businessData?.map((business, index) => (
        <BusinessItemCard
          key={index}
          business={business}
          navigation={navigation}
        />
      ))}
    </View>
  )
}

const BusinessItemCard = ({ business, navigation }) => {
  const [isFavourite, setIsFavourite] = useState(business.isFavourite)
  const handlePress = (business) => {
    navigation.navigate('BusinessScreen', {
      business,
      favouriteCallback: favouriteCallback,
    })
  }

  const favouriteCallback = (f) => setIsFavourite(f)
  const toggleFavourite = (f) => {
    business.isFavourite = !f
    setIsFavourite(business.isFavourite)
  }

  return (
    <TouchableOpacity
      style={styles.businessItemCard}
      activeOpacity={0.9}
      onPress={() => handlePress(business)}
    >
      {/* Use uri, data will be remote <Image source={{ uri: business.image_url }} /> */}
      <Image source={business.image} style={styles.image} />
      <TouchableOpacity
        style={styles.favouriteIcon}
        onPress={() => toggleFavourite(isFavourite)}
      >
        <FontAwesome name={'star-o'} size={24} color={'#fff'} />
        {isFavourite && (
          <FontAwesome
            style={{ position: 'absolute' }}
            name={'star'}
            size={20}
            color={theme.colors.primary}
          />
        )}
      </TouchableOpacity>
      <View style={styles.businessInfoContainer}>
        <Text style={styles.businessNameText} numberOfLines={1}>
          {/* set the letter of every word to upper case */}
          {business.name}
        </Text>
        <View style={styles.businessRating}>
          <Text style={styles.businessRatingText}>{business.rating}</Text>
        </View>
      </View>
      <View style={styles.businessInfo}>
        <View style={styles.businessItemInfoPill}>
          <Ionicons
            name="location-sharp"
            size={13}
            color={theme.colors.primary}
          />
          {/* distance has to be calculated based off the users location
          (either the location produced as the address or using device location) */}
          <Text style={styles.businessInfoPillText}>0</Text>
        </View>
        <View style={styles.businessItemInfoPill}>
          <Ionicons name="time" size={13} color={theme.colors.primary} />
          <Text style={styles.businessInfoPillText}> open</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  businessItemCard: {
    width: '100%',
    marginVertical: theme.constants.verticalCardMargin,
    alignSelf: 'center',
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '98%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  favouriteIcon: {
    position: 'absolute',
    top: 9,
    right: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  businessInfoContainer: {
    width: '98%',
    paddingHorizontal: 8,
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  businessInfo: {
    padding: 8,
    flexDirection: 'row',
  },
  businessNameText: {
    fontWeight: '700',
  },
  businessItemInfoPill: {
    height: 20,
    paddingHorizontal: 16,
    marginRight: 10,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    borderRadius: 15,
    backgroundColor: '#eee',
  },
  businessInfoPillText: {
    fontSize: 12,
    fontWeight: '700',
  },
  businessRating: {
    width: 23,
    height: 23,
    position: 'absolute',
    top: 9,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#eee',
  },
  businessRatingText: {
    fontSize: 12,
    fontWeight: '700',
  },
})
