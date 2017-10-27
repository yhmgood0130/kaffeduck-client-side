import React from 'react';
import { Text, AppRegistry } from 'react-native';
import App from './App';
import { Provider, connect } from 'react-redux';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import configureStore from './src/store/configureStore';
import AppFooter from './src/components/AppFooter';
import Home from './src/components/pages/Home';
import Coffee from './src/components/pages/Coffee';
import Subscription from './src/components/pages/Subscription';
import Contact from './src/components/pages/Contact';
import Login from './src/components/Login/Login';
import Quiz from './src/components/Quiz';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from './src/config.json';
const Iconic = createIconSetFromFontello(fontelloConfig);

const store = configureStore()
const RouterWithRedux = connect()(Router);

const TabIcon = ({ selected, name}) => {
    return (
      name == "ducky" ? <Iconic name={name} size={30} color="#900" /> : <Icon name={name} size={30} color="#900" />
    )
}
// <Scene key="pageTwo" component={PageTwo} title="PageTwo" />

const kaffeduck = () => (
  <Provider store={store}>
    <RouterWithRedux>
      <Scene key="root">
        <Scene key="login" navigationBarStyle={{ backgroundColor:'#edc42f' }} component={Login} title="Welcome to KaffeDuck" initial={true}/>
        <Scene key="quiz" component={Quiz} title = "Quiz" hideNavBar={true} />
        <Scene
          key="rootTabBar"
          tabs={true}
          tabBarStyle={{backgroundColor: '#ffffff'}}>
          <Scene key="home" component={Home} title="Home" name="home" icon={TabIcon} initial hideNavBar={true}/>
          <Scene key="subscription" component={Subscription} name="ducky" title="Subscription" icon={TabIcon} hideNavBar={true}/>
          <Scene key="coffee" component={Coffee} title="Coffee" name="coffee" icon={TabIcon} hideNavBar={true}/>
          <Scene key="contact" component={Contact} title="Contact" name="envelope-o" icon={TabIcon} hideNavBar={true}/>
        </Scene>
      </Scene>
    </RouterWithRedux>
  </Provider>
)

AppRegistry.registerComponent('kaffeduck', () => kaffeduck);
