import {
  useEffect,
  useReducer,
  useMemo,
  useContext,
  createContext,
} from 'react'
import * as SecureStore from 'expo-secure-store'

import { SplashScreen } from '../screens/intro'

const AuthContext = createContext({})

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          }
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          }
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          }
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  )

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken

      try {
        userToken = await SecureStore.getItemAsync('userToken')
      } catch (e) {
        // Restoring token failed
      }
      dispatch({ type: 'RESTORE_TOKEN', token: userToken })
    }

    bootstrapAsync()
  }, [])

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {
        // send user data to server, persist token, and handle any auth errors
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        // send user data to server, persist token, and handle any auth errors
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })
      },
    }),
    []
  )

  if (state.isLoading) {
    return <SplashScreen />
  }

  return (
    <AuthContext.Provider value={{ state }}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider

export const useAuthContext = () => useContext(AuthContext)
