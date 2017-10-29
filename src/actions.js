import {FETCHING_COFFEE, FETCHING_COFFEE_SUCCESS, FETCHING_COFFEE_FAILURE} from './constants';
import {FETCHING_COFFEEMAKER, FETCHING_COFFEEMAKER_SUCCESS, FETCHING_COFFEEMAKER_FAILURE} from './constants';

export function fetchCoffeeFromAPI() {
  return (dispatch) => {
    dispatch(getCoffee());
    fetch('http://localhost:8080/kaffeduck-api/coffees')
      .then(res => res.json())
      .then(json => dispatch(getCoffeeSuccess(json._embedded.coffees)))
      .catch(err => dispatch(getCoffeeFailure(err)))
  }
}

export function fetchCoffeeMakerFromAPI() {
  return (dispatch) => {
    dispatch(getCoffeeMaker());
    fetch('http://localhost:8080/kaffeduck-api/coffeemakers')
      .then(res => res.json())
      .then(json => dispatch(getCoffeeMakerSuccess(json._embedded.coffeemakers)))
      .catch(err => dispatch(getCoffeeMakerFailure(err)))
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

function getCoffeeMaker() {
  return {
    type: FETCHING_COFFEEMAKER
  }
}

function getCoffeeMakerSuccess(data) {
  return {
    type: FETCHING_COFFEEMAKER_SUCCESS,
    data
  }
}

function getCoffeeMakerFailure() {
  return {
    type: FETCHING_COFFEEMAKER_FAILURE
  }
}
