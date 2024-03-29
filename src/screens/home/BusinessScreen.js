import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { Ionicons, Entypo, FontAwesome } from '@expo/vector-icons'
import { theme } from '../../core/theme'

export default function BusinessScreen({ route, navigation }) {
  const [showMap, setShowMap] = useState(false)

  const { image_url, name, distance, rating } = route?.params?.business
  const { isFavourite } = route?.params?.state

  return (
    <View style={styles.container}>
      <View style={styles.mapImageWrpper}>
        {showMap ? (
          {
            /* Show map */
          }
        ) : (
          <Image source={image_url} style={styles.image} />
        )}
        <View style={styles.favouriteIcon}>
          <FontAwesome name={'star-o'} size={29} color={'#fff'} />
          {isFavourite && (
            <FontAwesome
              style={{ position: 'absolute' }}
              name={'star'}
              size={25}
              color={theme.colors.primary}
            />
          )}
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ zIndex: 20 }}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{name}</Text>
            <TouchableOpacity onPress={() => setShowMap((e) => !e)}>
              <Entypo
                name="map"
                size={24}
                color={`${showMap ? theme.colors.primary : '#000'}`}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
            }}
          >
            <View style={styles.info}>
              <View style={styles.infoItem}>
                <View style={styles.businessRating}>
                  <Text style={styles.businessRatingText}>{rating}</Text>
                </View>
              </View>
              <View style={styles.infoItem}>
                <Ionicons
                  name="location-sharp"
                  size={13}
                  color={theme.colors.primary}
                />
                <Text style={styles.infoText}>{distance}</Text>
              </View>
              <View style={styles.infoItem}>
                <Entypo name="link" size={16} color={theme.colors.primary} />
                <Text
                  style={[styles.infoText, { color: theme.colors.primary }]}
                >
                  learn more
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff',
  },
  mapImageWrpper: {
    width: '100%',
    position: 'absolute',
  },
  image: {
    width: '100%',
    height: 230,
    resizeMode: 'cover',
  },
  favouriteIcon: {
    position: 'absolute',
    top: 50,
    right: 25,
    zIndex: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    marginTop: 160,
    paddingHorizontal: 25,
    paddingVertical: 25,
    paddingBottom: 10,
    position: 'relative',
    zIndex: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    maxWidth: '80%',
    color: '#000',
    fontSize: 23,
    fontWeight: '700',
  },
  businessRating: {
    width: 23,
    height: 23,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#eee',
  },
  businessRatingText: {
    fontSize: 12,
    fontWeight: '700',
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoItem: {
    marginRight: 7,
    paddingHorizontal: 6,
    paddingVertical: 3,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  infoText: {
    marginLeft: 4,
    fontSize: 12,
  },
})
