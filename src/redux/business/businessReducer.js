import {
  FETCH_BUSINESS_ERROR,
  FETCH_BUSINESS_REQUEST,
  FETCH_BUSINESS_SUCCESS,
  FETCH_BUSINESSES_ERROR,
  FETCH_BUSINESSES_REQUEST,
  FETCH_BUSINESSES_SUCCESS,
  FETCH_GROCERY_STORES_ERROR,
  FETCH_GROCERY_STORES_REQUEST,
  FETCH_GROCERY_STORES_SUCCESS,
  FETCH_RESTAURANTS_ERROR,
  FETCH_RESTAURANTS_REQUEST,
  FETCH_RESTAURANTS_SUCCESS,
  FETCH_SERIVCES_ERROR,
  FETCH_SERIVCES_REQUEST,
  FETCH_SERIVCES_SUCCESS,
} from './businessConstants'

const initialState = {
  selectedBusiness: null,
  allBusinesses: {},
  groceryStores: [],
  restaurants: [],
  services: [],
  favourites: [],
  loading: false,
  error: null,
}

// this handles fetching of a single business or multiple businesses
const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUSINESSES_REQUEST:
    case FETCH_BUSINESSES_REQUEST:
    case FETCH_GROCERY_STORES_REQUEST:
    case FETCH_RESTAURANTS_REQUEST:
    case FETCH_SERIVCES_REQUEST:
      return handleRequest(state)

    case FETCH_BUSINESS_SUCCESS:
      return handleSuccess(state, { selectedBusiness: action.payload })

    case FETCH_BUSINESSES_SUCCESS:
      return handleSuccess(state, { allBusinesses: action.payload })

    case FETCH_GROCERY_STORES_SUCCESS:
      return handleSuccess(state, { groceryStores: action.payload })

    case FETCH_RESTAURANTS_SUCCESS:
      return handleSuccess(state, { restaurants: action.payload })

    case FETCH_SERIVCES_SUCCESS:
      return handleSuccess(state, { services: action.payload })

    case FETCH_BUSINESSES_ERROR:
    case FETCH_BUSINESSES_ERROR:
    case FETCH_GROCERY_STORES_ERROR:
    case FETCH_RESTAURANTS_ERROR:
    case FETCH_SERIVCES_ERROR:
      return handleError(state, action.payload)
    default:
      return state
  }
}

const handleRequest = (state) => {
  return {
    ...state,
    loading: true,
  }
}

const handleSuccess = (state, data) => {
  return {
    ...state,
    loading: false,
    ...data,
  }
}

const handleError = (state, error) => {
  return {
    ...state,
    loading: false,
    error: error,
  }
}

export default { businessReducer }
