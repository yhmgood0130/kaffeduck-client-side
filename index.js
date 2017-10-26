import React from 'react';
import { Text, AppRegistry } from 'react-native';
import App from './App';
import { Provider, connect } from 'react-redux';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';
import configureStore from './store/configureStore';
import Home from './components/pages/Home';
import Coffee from './components/pages/Coffee';
import Subscription from './components/pages/Subscription';
import Contact from './components/pages/Contact';
import Login from './components/Login';

const store = configureStore()
const RouterWithRedux = connect()(Router);

const TabIcon = ({ selected, title}) => {
    return (
      <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
    )
}

// const Scenes = Actions.create(
//       <Scene key="root">
//         <Scene key='Login' tabs={true} hideNavBar type={ActionConst.REPLACE}>
//           <Scene key="home" component={Home} title="home"/>
//           <Scene key="coffee" component={Coffee} title="coffee"/>
//           <Scene key="subscription" component={Subscription} title="subscription"/>
//           <Scene key="contact" component={Contact} title="contact"/>
//         </Scene>
//        <Scene key='app' component={App} hideNavBar type={ActionConst.REPLACE}></Scene>
//       </Scene>
// )

// const ConnectedRouter = connect()(Router);
// <Router scenes={scenes}/>
// <ConnectedRouter scenes={Scenes} />
// <Scene key="pageTwo" component={PageTwo} title="PageTwo" />

const kaffeduck = () => (
  <Provider store={store}>
    <RouterWithRedux>
      <Scene key="root">
        <Scene key="login" component={Login} title="Login" initial={true}/>
        <Scene
          key="rootTabBar"
          tabs={false}
          tabBarStyle={{backgroundColor: '#ffffff'}}>
          <Scene key="home" component={Home} title="Home" icon={TabIcon} initial />
          <Scene key="subscription" component={Subscription} title="Subscription" icon={TabIcon} />
        </Scene>
      </Scene>
    </RouterWithRedux>
  </Provider>
)

AppRegistry.registerComponent('kaffeduck', () => kaffeduck);
