import React, { Component } from 'react';
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
import Signup from './src/components/Login/Signup';
import Quiz from './src/components/pages/quiz/Quiz';
import Quiz1 from './src/components/pages/quiz/Quiz1';
import Quiz2 from './src/components/pages/quiz/Quiz2';
import Quiz3 from './src/components/pages/quiz/Quiz3';
import Result from './src/components/pages/quiz/Result';
import Suggestion from './src/components/pages/quiz/Suggestion';
import { fetchCoffeeFromAPI } from './src/actions';
import { fetchCoffeeMakerFromAPI } from './src/actions';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from './src/config.json';
import firebase from 'firebase';
const Iconic = createIconSetFromFontello(fontelloConfig);

const store = configureStore()

store.dispatch(fetchCoffeeFromAPI());
store.dispatch(fetchCoffeeMakerFromAPI());
const RouterWithRedux = connect()(Router);

const TabIcon = ({ selected, name}) => {
    return (
      name == "ducky" ? <Iconic name={name} size={30} color="#fff" /> : <Icon name={name} size={30} color="#fff" />
    )
}

class kaffeduck extends Component {
  componentWillMount() {
        firebase.initializeApp({
          apiKey: "AIzaSyCgMyWgdT-ykEPvOJ14pQgLUo7xudstVQw",
          authDomain: "kaffeduck-quack.firebaseapp.com",
          databaseURL: "https://kaffeduck-quack.firebaseio.com",
          projectId: "kaffeduck-quack",
          storageBucket: "",
          messagingSenderId: "181940564334"
        });
    }

  checkAuth(){
    return getStoredSessionToken().then(sessionToken =>{
     if(sesstionToken)
      Actions.home()
     else
      Actions.login()
    })
  }
  render(){
    console.disableYellowBox = true;
    return (
  <Provider store={store}>
    <RouterWithRedux>
      <Scene key="root">
        <Scene key="login" component={Login} title="Welcome to KaffeDuck" initial={true} hideNavBar={true} />
        <Scene key="signup" navigationBarStyle={{ backgroundColor:'#fff' }} component={Signup} title="Welcome to KaffeDuck" />
        <Scene key="quiz" component={Quiz} title = "Quiz" hideNavBar={true} panHandlers={null} />
        <Scene key="quiz1" component={Quiz1} title="Quiz1" hideNavBar={true} panHandlers={null}/>
        <Scene key="quiz2" component={Quiz2} title="Quiz2" hideNavBar={true} panHandlers={null}/>
        <Scene key="quiz3" component={Quiz3} title="Quiz3" hideNavBar={true} panHandlers={null}/>
        <Scene key="result" component={Result} title="Result" hideNavBar={true} panHandlers={null}/>
        <Scene key="suggestion" component={Suggestion} title="Suggestion" hideNavBar={true} panHandlers={null}/>

        <Scene
          key="rootTabBar"
          tabs={true}
          tabBarStyle={{backgroundColor: 'rgb(100,52,17)'}} panHandlers={null}>
          <Scene key="home" component={Home} title="Home" name="home" icon={TabIcon} initial hideNavBar={true}/>
          <Scene key="subscription" component={Subscription} name="ducky" title="Subscription" icon={TabIcon} hideNavBar={true}/>
          <Scene key="coffee" component={Coffee} title="Coffee" name="coffee" icon={TabIcon} hideNavBar={true}/>
          <Scene key="contact" component={Contact} title="Contact" name="envelope-o" icon={TabIcon} hideNavBar={true}/>
        </Scene>
      </Scene>
    </RouterWithRedux>
  </Provider>
    )
  }
}

AppRegistry.registerComponent('kaffeduck', () => kaffeduck);
