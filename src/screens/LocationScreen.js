import React, { useRef, useState, useEffect } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Animated,
  StyleSheet,
  Dimensions,
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Portal } from 'react-native-paper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import BackButton from '../components/BackButton'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

export default function AddressPage({ show, onDismiss, children }) {
  const screenHeight = Dimensions.get('window').height - 40
  const screenWidth = Dimensions.get('window').width
  const [open, setOpen] = useState(show)
  const bottom = useRef(new Animated.Value(-screenHeight)).current

  useEffect(() => {
    if (show) {
      setOpen(show)
      Animated.timing(bottom, {
        toValue: -screenHeight,
        duration: 500,
        useNativeDriver: false,
      }).start()
    } else {
      Animated.timing(bottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start(() => {
        setOpen(false)
      })
    }
  }, [show])

  if (!open) {
    return null
  }
  return (
    <Portal>
      <View style={styles.backDrop}>
        <Animated.View
          style={[
            styles.root,
            {
              height: screenHeight,
              width: screenWidth,
              bottom: 0,
              shadowOffset: {
                height: -3,
              },
            },
            styles.common,
          ]}
        >
          <View
            style={[
              styles.header,
              styles.common,
              {
                shadowOffset: {
                  height: 3,
                },
              },
            ]}
          >
            <FontAwesome
              name="times"
              color="red"
              size={25}
              style={[styles.closeIcon]}
              onPress={() => {
                onDismiss()
                // console.log('cancel button pressed')
              }}
            />
            <Text
              style={{
                top: '20%',
                fontWeight: 'bold',
                fontSize: 16,
                textAlign: 'center',
              }}
            >
              Change location
            </Text>
          </View>
          <SearchBar title="Search location" />
        </Animated.View>
      </View>
    </Portal>
  )
}

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    zIndex: 100,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },
  header: {
    height: 44,
    backgroundColor: '#fff',
  },
  common: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 3,
  },
  popup: {
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    minHeight: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cover: {
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  closeIcon: {
    position: 'absolute',
    right: 10,
    padding: 10,
    top: 0,
    zIndex: 10,
  },
  backDrop: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 80,
    backgroundColor: 'rgba(0,0,0, 0.012)',
  },
})
