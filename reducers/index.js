import { combineReducers } from "redux";
import routes from './routes';
import coffee from './coffee';

const rootReducer = combineReducers({
  routes,
  coffee
})

export default rootReducer;
