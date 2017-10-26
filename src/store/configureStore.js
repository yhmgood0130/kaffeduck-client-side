import { createStore, applyMiddleware } from 'redux';
import app from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore() {
  let store = createStore(app, applyMiddleware(thunk))

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
