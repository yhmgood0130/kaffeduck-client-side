import {FETCHING_COFFEE, FETCHING_COFFEE_SUCCESS, FETCHING_COFFEE_FAILURE} from './constants';

export function fetchCoffeeFromAPI() {
  return (dispatch) => {
    dispatch(getCoffee());
    fetch('http://localhost:8080/kaffeduck-api/coffees')
      .then(res => res.json())
      .then(json => dispatch(getCoffeeSuccess(json._embedded.coffees)))
      .catch(err => dispatch(getCoffeeFailure(err)))
  }
}

function getCoffee() {
  return {
    type: FETCHING_COFFEE
  }
}

function getCoffeeSuccess(data) {
  return {
    type: FETCHING_COFFEE_SUCCESS,
    data
  }
}

function getCoffeeFailure() {
  return {
    type: FETCHING_COFFEE_FAILURE
  }
}
