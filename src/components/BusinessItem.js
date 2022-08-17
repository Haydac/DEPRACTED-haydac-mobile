import React, { useState } from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { theme } from '../core/theme'

export default function BusinessItem({ businessData, navigation }) {
  return (
    <View>
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
      onPress={() => handlePress(business)}
    >
      {/* Use uri, data will be remote <Image source={{ uri: business.image_url }} /> */}
      <Image source={business.image_url} style={styles.image} />
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
        <View style={styles.businessInfo}>
          <Text style={styles.businessNameText} numberOfLines={1}>
            {business.name}
          </Text>
          <View style={styles.businessDistance}>
            <Ionicons
              name="location-sharp"
              size={13}
              color={theme.colors.primary}
            />
            <Text style={styles.businessDistanceText}>
              {' '}
              {business.distance}
            </Text>
          </View>
        </View>
        <View style={styles.businessRating}>
          <Text style={styles.businessRatingText}>{business.rating}</Text>
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
    padding: 8,
    alignSelf: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  businessInfo: {},
  businessNameText: {
    fontWeight: '700',
  },
  businessDistance: {
    height: 20,
    paddingHorizontal: 16,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    borderRadius: 15,
    backgroundColor: '#eee',
  },
  businessDistanceText: {
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
