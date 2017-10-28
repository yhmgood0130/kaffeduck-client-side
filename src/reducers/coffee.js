import {FETCHING_COFFEE, FETCHING_COFFEE_SUCCESS, FETCHING_COFFEE_FAILURE} from '../constants';

const initialState = {
  coffee:[],
  isFetching: false,
  error: false
}

export default function coffeeReducer(state = initialState, action){
  switch(action.type){
    case FETCHING_COFFEE:
      return {
        ...state,
        isFetching: true,
        coffee:[]
      }
    case FETCHING_COFFEE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        coffee: action.data
      }
    case FETCHING_COFFEE_FAILURE:
      return{
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}
