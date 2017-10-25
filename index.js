import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

const kaffeduck = () => {
  <Provider store={store}>
    <App />
  </Provider>
}

AppRegistry.registerComponent('kaffeduck', () => kaffeduck);
