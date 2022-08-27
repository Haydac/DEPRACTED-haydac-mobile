import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { theme } from '../../core/theme'

export default function Header({ style, children }) {
  return <Text style={[styles.header, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    fontWeight: 'bold',
    paddingVertical: 12,
  },
})
