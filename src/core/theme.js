import { DefaultTheme } from 'react-native-paper'

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    text: '#000000',
    primary: '#BB6BD9',
    secondary: '#414757',
    error: '#f13a59',
  },
  constants: {
    verticalCardMargin: 5,
  },
}
