import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';

class Login extends Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  render () {
    const {routes} = this.context;
    return (

    <View style={styles.container}>
      <ImageBackground source={require('../../images/background.jpg')} style={styles.backgroundImage} >
        <View style={styles.logoContainer}>
        <Image
          source={require('../../images/coffee_duck.jpeg')}
          style={styles.logo}
          />
          <Image
            source={require('../../images/coffee_duck.jpeg')}
            style={styles.logo}
            />
          <Text style={styles.title}>Explore the coffee world with KaffeDuck. This Duck will help you to choose the right type of coffee for you.</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm />
        </View >
      </ImageBackground>
     </View >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
  },
  logoContainer: {
    flexGrow:1,
    alignItems: 'center',
    justifyContent:'center',
  },
  logo: {
    width:100,
    height:100,
    borderRadius: 49
  },
  title: {
    color: "black",
    width: 200,
    textAlign: "center",
    fontSize: 15,
    opacity: 0.9,
    marginTop:20,
    fontWeight: 'bold',
    fontFamily: 'Gurmukhi MN'
  },
  formContainer : {
    marginTop:-50
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
  }
});

export default connect(({routes}) => ({routes}))(Login);
