import axios from 'axios'
import {
  FETCH_BUSINESSES_ERROR,
  FETCH_BUSINESSES_SUCCESS,
  FETCH_BUSINESSES_REQUEST,
} from './businessConstants'
import { useSelector } from 'react-redux'
import { API_URL } from '@env'

// based of the businesses gotten, check favourites database.
// retrieve the businesses under the userID in favourites Schema
// and set the retrieved businesses as favourites
// this can be done at the initial file the businesses are fetched

/**
 *
 * @returns an array of all registered businesses
 */
export const fetchBusinesses = () => async (dispatch) => {
  console.log('fetchBusinesses action reached')
  dispatch({ type: FETCH_BUSINESSES_REQUEST })

  try {
    // get the response object from the API
    const response = await axios.get(`${API_URL}/business/businesses`)

    // convert retrieved object of businesses to an array of objects
    const businesses = Object.entries(response.data).map(([id, data]) => ({
      id,
      ...data,
    }))

    // TODO: this is where the favourites are checked
    const updatedBusinesses = businesses.map((business) => ({
      ...business,
      isFavourite: false,
    }))

    dispatch({ type: FETCH_BUSINESSES_SUCCESS, payload: updatedBusinesses })
  } catch (error) {
    dispatch({ type: FETCH_BUSINESSES_ERROR, payload: error.message })
  }
}

/**
 *
 * @param {*} categoryId - id of the category
 * @returns a list of businesses belonging to the category(categoryID)
 */
export const fetchBusinessesbyCategory = (categoryId) => async (dispatch) => {
  console.log('fetchBusinessesbyCategory action reached')

  // Retrive the list of businesses
  const businesses = useSelector((state) => {
    // console.log(JSON.stringify(state.businesses.businessArray))
    state.businesses.businessArray
  })

  // handle edge case
  if (!businesses || businesses.length == 0) {
    console.log('handling edge case')
    dispatch({ type: FETCH_BUSINESSES_REQUEST })
    // Filter the businesses by country
    try {
      console.log('try block reached')
      // get the response object from the API
      const response = await axios.get(`${API_URL}/business/:${categoryId}`)
      console.log(response)
      // convert retrieved object of businesses to an array of objects
      const businesses = Object.entries(response.data).map(([id, data]) => ({
        id,
        ...data,
      }))

      // TODO: this is where the favourites should be checked
      const updatedBusinesses = businesses.map((business) => ({
        ...business,
        isFavourite: false,
      }))
      console.log('outputting')
      console.log(updatedBusinesses)
      dispatch({ type: FETCH_BUSINESSES_SUCCESS, payload: updatedBusinesses })
    } catch (error) {
      // handle errors
      dispatch({ type: FETCH_BUSINESSES_ERROR, payload: error.message })
    }
  } else {
    // Filter the businesses by category
    const businessesByCategory = businesses.filter(
      (business) => business.category === categoryId
    )
    dispatch({ type: FETCH_BUSINESSES_SUCCESS, payload: businessesByCountry })
  }
}

export const fetchBusinessesbyCountry = (countryId) => (dispatch) => {
  dispatch({ type: FETCH_BUSINESSES_REQUEST })

  // Retrive the list of businesses
  const businesses = useSelector((state) => state.businesses.businessArray)

  // Filter the businesses by country
  const businessesByCountry = businesses.filter(
    (business) => business.country === countryId
  )

  dispatch({ type: FETCH_BUSINESSES_SUCCESS, payload: businessesByCountry })
}
