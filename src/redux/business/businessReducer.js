import {
  FETCH_BUSINESS_ERROR,
  FETCH_BUSINESS_REQUEST,
  FETCH_BUSINESS_SUCCESS,
  FETCH_BUSINESSES_ERROR,
  FETCH_BUSINESSES_REQUEST,
  FETCH_BUSINESSES_SUCCESS,
} from './businessConstants'

const initialState = {
  businessArray: [],
  business: {},
  loading: false,
  error: null,
}

const fetchBusinesses = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BUSINESSES_REQUEST:
    case FETCH_BUSINESS_REQUEST:
      return { ...state, loading: true, error: null }
    case FETCH_BUSINESS_SUCCESS:
      return { ...state, business: action.payload, loading: false }
    case FETCH_BUSINESSES_SUCCESS:
      return { ...state, businesses: action.payload, loading: false }
    case FETCH_BUSINESSES_ERROR:
    case FETCH_BUSINESS_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export default { fetchBusinesses }
