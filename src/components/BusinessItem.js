import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import DemarcationLine from './DemarcationLine'

const item = [
  {
    key: 1,
    image: require('../assets/businessesImages/afrospiceImage.png'),
    text: 'Afro Spice Chophouse',
    distance: '800 m',
    hours: '1:00pm - 9:00 pm',
    rating: '4.0',
  },
  {
    key: 2,
    image: require('../assets/businessesImages/tiplestoreImage.png'),
    text: 'Tripplee African and Caribbean market',
    distance: '1 km',
    hours: '10:00am - 11:00 pm',
    rating: '4.5',
  },
  {
    key: 3,
    image: require('../assets/businessesImages/tiplestoreImage.png'),
    text: 'a business',
    distance: '80 m',
    hours: 'time here',
    rating: '3.0',
  },
  {
    key: 4,
    image: require('../assets/businessesImages/tiplestoreImage.png'),
    text: 'another business',
    distance: '200 m',
    hours: 'time here',
    rating: '4.0',
  },
]

export default function BusinessItems({ businesses = item }) {
  return (
    <View>
      <ScrollView vertical>
        {/* loop starts here */}
        {businesses.map((business, index) => (
          <View style={[styles.card, { marginTop: '4%' }]} key={business.key}>
            <Pressable>
              <TouchableOpacity activeOpacity={1}>
                <BusinessImage image={business.image} />
                <BusinessInfo
                  text={business.text}
                  distance={business.distance}
                  hours={business.hours}
                  rating={business.rating}
                />
              </TouchableOpacity>
            </Pressable>
            <DemarcationLine />
          </View>
        ))}
        {/* loop ends here */}
      </ScrollView>
    </View>
  )
}

const BusinessImage = ({ image }) => {
  return (
    <View>
      {/* bookmark button */}
      <Pressable>
        <TouchableOpacity
          style={{
            marginTop: '2%',
            position: 'absolute',
            zIndex: 10,
            width: '95%',
            alignItems: 'flex-end',
          }}
          activeOpacity={0.5}
        >
          {/* color is dependent on if the user has bookmarked or not */}
          <Icon name="bookmark-outline" size={25} color="#fff" />
        </TouchableOpacity>
      </Pressable>
      {/* Business image */}
      <Image style={[styles.image, { zIndex: -1 }]} source={image} />
    </View>
  )
}

const BusinessInfo = ({ text, distance, hours, rating }) => {
  return (
    <View style={{ marginTop: '2%' }}>
      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          alignSelf: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* business name */}
        <Text style={styles.text}>{text}</Text>
        {/* rating */}
        <View style={styles.ratingStyling}>
          <Text style={[styles.text, styles.rating]}>{rating}</Text>
        </View>
      </View>

      {/* row for additioncal information */}
      <View
        style={[
          styles.text,
          {
            marginTop: '2%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        ]}
      >
        <View style={styles.distanceStyle}>
          <Icon name="map-marker" size={16} color="#25AAE1" />
          <Text style={{ fontWeight: '300', color: 'gray' }}>{distance}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    alignSelf: 'center',
    borderRadius: 20,
    marginBottom: '2%',
  },
  image: {
    width: '98%',
    alignSelf: 'center',
    borderRadius: 20,
  },
  text: {
    fontWeight: '700',
    width: '90%',
    alignSelf: 'center',
  },
  distanceStyle: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: '#eee',
  },
  rating: {
    fontSize: 12,
    fontWeight: '700',
    width: 'auto',
  },
  ratingStyling: {
    backgroundColor: '#eee',
    height: 27,
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
})
