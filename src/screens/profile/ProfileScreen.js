import React from 'react'
import { StyleSheet, View } from 'react-native'
import Screen from '../../components/core/Screen'
import Header from '../../components/text/Header'
import Button from '../../components/buttons/Button'

import {
  Entypo,
  Ionicons,
  FontAwesome5,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

export default function ProfileScreen() {
  const accountItemGroups = [
    [
      {
        title: 'Personal info',
        icon: <Ionicons name="person" color={'#000'} size={16} />,
        onPress: () => console.log('account info needs screen'),
      },
    ],
    ,
    [
      {
        title: 'FAQ',
        icon: <Entypo name="help-with-circle" color={'#000'} size={16} />,
        onPress: () => console.log('account faq needs screen'),
      },

      {
        title: 'Support',
        icon: <FontAwesome5 name="hands-helping" color={'#000'} size={16} />,
        onPress: () => console.log('account support needs screen'),
      },
      {
        title: 'Invite family & friends',
        icon: <Ionicons name="ios-person-add" color={'#000'} size={16} />,
        onPress: () => console.log('account invite needs screen'),
      },
    ],
    [
      {
        title: 'Privacy',
        icon: <MaterialIcons name="privacy-tip" color={'#000'} size={16} />,
        onPress: () => console.log('account privacy needs screen'),
      },
      {
        title: 'Feedback',
        icon: <MaterialIcons name="feedback" color={'#000'} size={16} />,
        onPress: () => console.log('account feedback needs screen'),
      },
      {
        title: 'About',
        icon: (
          <MaterialCommunityIcons
            name="book-information-variant"
            color={'#000'}
            size={16}
          />
        ),
        onPress: () => console.log('account about needs screen'),
      },
    ],
    [
      {
        title: 'Log out',
        icon: <MaterialCommunityIcons name="logout" color={'#000'} size={16} />,
        onPress: () => logout(),
      },
    ],
  ]

  // TODO: implement logout request
  const logout = () => {}

  return (
    <Screen style={styles.container}>
      <Header style={styles.headerStyle}>Account</Header>

      {accountItemGroups?.map((group, groupIdx) => (
        <View style={styles.cardStyle} key={groupIdx}>
          {group?.map((accountItem, itemIdx) => (
            <Button
              key={itemIdx}
              text={accountItem.title}
              width="100%"
              height={18}
              style={styles.accountItemBtn}
              textStyle={styles.accountItemBtnText}
              textColor="#000"
              leftIcon={accountItem.icon}
              onPress={accountItem.onPress}
            />
          ))}
        </View>
      ))}
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
  },
  headerStyle: {
    width: '100%',
    textAlign: 'center',
    color: '#000',
  },
  cardStyle: {
    width: '100%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 5,
    backgroundColor: '#fff',
  },
  accountItemBtn: {
    marginLeft: 40,
    marginVertical: 20,
    justifyContent: 'flex-start',
  },
  accountItemBtnText: {
    fontSize: 14,
    marginLeft: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
})
