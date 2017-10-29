import {FETCHING_COFFEEMAKER, FETCHING_COFFEEMAKER_SUCCESS, FETCHING_COFFEEMAKER_FAILURE} from '../constants';

const initialState = {
  coffeeMaker:[],
  isFetching: false,
  error: false
}

export default function coffeeMakerReducer(state = initialState, action){
  switch(action.type){
    case FETCHING_COFFEEMAKER:
      return {
        ...state,
        isFetching: true,
        coffeeMaker:[]
      }
    case FETCHING_COFFEEMAKER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        coffeeMaker: action.data
      }
    case FETCHING_COFFEEMAKER_FAILURE:
      return{
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}
