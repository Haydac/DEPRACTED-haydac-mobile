import axios from 'axios'
import {
  FETCH_BUSINESSES_ERROR,
  FETCH_BUSINESSES_SUCCESS,
  FETCH_BUSINESSES_REQUEST,
} from './businessConstants'
import { useSelector } from 'react-redux'
import { API_URL, TEST_API_URL } from '@env'

// based of the businesses gotten, check favourites database.
// retrieve the businesses under the userID in favourites Schema
// and set the retrieved businesses as favourites
// this can be done at the initial file the businesses are fetched

/**
 *
 * @returns an array of all registered businesses
 */
export const fetchBusinesses = () => async (dispatch) => {
  dispatch({ type: FETCH_BUSINESSES_REQUEST })

  try {
    // get the response object from the API
    const response = await axios.get(`${API_URL}/business/*`)

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
  // Retrive the list of businesses
  let foundBusinesses = useSelector((state) => {
    state.businesses.businessArray
  })

  // handle edge case
  if (!foundBusinesses || foundBusinesses.length == 0) {
    dispatch({ type: FETCH_BUSINESSES_REQUEST })
    // Filter the businesses by country
    try {
      let url = `${API_URL}/business/category/${categoryId}`.trim()
      // get the response object from the API
      let response = await axios.get(url)
      response = response.data
      // convert retrieved object of businesses to an array of objects
      let businesses = Object.entries(response.data).map(([id, data]) => ({
        id,
        ...data,
      }))

      // TODO: this is where the favourites should be checked
      const updatedBusinesses = businesses.map((business) => ({
        ...business,
        isFavourite: false,
      }))
      console.log(updatedBusinesses)
      dispatch({ type: FETCH_BUSINESSES_SUCCESS, payload: updatedBusinesses })
      //   console.log('reachable')
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
