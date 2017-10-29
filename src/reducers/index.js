import { combineReducers } from "redux";
import routes from './routes';
import coffee from './coffee';
import coffeeMaker from './coffeeMaker';

const rootReducer = combineReducers({
  routes,
  coffee,
  coffeeMaker
})

export default rootReducer;
