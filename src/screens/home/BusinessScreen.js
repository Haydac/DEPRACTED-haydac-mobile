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
import Button from '../../components/buttons/Button'

export default function BusinessScreen({ route, navigation }) {
  navigation.setOptions({
    headerShown: true,
    headerTransparent: true,
    headerRight: () =>
      !showMap && (
        <TouchableOpacity
          style={styles.favouriteIcon}
          onPress={() => toggleFavourite(isFavourite)}
        >
          <FontAwesome name={'star-o'} size={29} color={'#fff'} />
          {isFavourited && (
            <FontAwesome
              style={{ position: 'absolute' }}
              name={'star'}
              size={25}
              color={theme.colors.primary}
            />
          )}
        </TouchableOpacity>
      ),
  })

  const business = route?.params?.business
  const { image_url, name, distance, rating, isFavourite } = business
  const [isFavourited, setIsFavourited] = useState(business.isFavourite)
  const [showMap, setShowMap] = useState(false)

  const toggleFavourite = (f) => {
    business.isFavourite = !f
    setIsFavourited(business.isFavourite)
    route?.params?.favouriteCallback(business.isFavourite)
  }

  // open directions to business
  const onTakeMeTherePressed = () => {}

  return (
    <View style={styles.container}>
      <View style={styles.mapImageContainer}>
        {showMap ? (
          // show map
          <Text>Map</Text>
        ) : (
          <Image source={image_url} style={styles.image} />
        )}
      </View>
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
              <Text style={[styles.infoText, { color: theme.colors.primary }]}>
                learn more
              </Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.businessInfo}
        contentContainerStyle={{
          alignItems: 'center',
        }}
      ></ScrollView>
      <Button
        text="Take me there"
        width={'86%'}
        height={40}
        borderRadius={50}
        backgroundColor={theme.colors.primary}
        style={styles.takeMeThereBtn}
        textStyle={styles.takeMeThereText}
        textColor={'#fff'}
        onPress={onTakeMeTherePressed}
        onPressIn={() => {}}
        onPressOut={() => {}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#fff',
  },
  mapImageContainer: {
    width: '100%',
    height: 230,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 230,
    resizeMode: 'cover',
  },
  favouriteIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
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
  businessInfo: {
    width: '100%',
    zIndex: 20,
  },
  takeMeThereBtn: {
    position: 'absolute',
    bottom: 10,
    zIndex: 100,
  },
  takeMeThereText: {},
})
