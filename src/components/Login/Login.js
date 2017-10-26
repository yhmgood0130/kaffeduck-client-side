import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import LoginForm from './LoginForm';

class Login extends Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  render () {
    const {routes} = this.context;
    //const goToPageTwo = () => Actions.pageTwo({text: 'Helo world'});
    return (

    <View style={styles.container}>
    <View style={styles.logoContainer}>
    <Image
      source={require('../../images/coffee_duck.jpeg')}
      style={styles.logo}
    / >
      <Text style={styles.title}>Explore the coffee world wit KaffeDuck.</Text>
      <Text style={styles.title}>This Duck will help you to choose the right type of coffee for you.</Text>
      </View>
      <View style={styles.formContainer}>
        <LoginForm />
      </View >
    </View >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7d734"
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
    marginTop: 10,
    width: 160,
    textAlign: "center",
    opacity: 0.9
  }
});

export default connect(({routes}) => ({routes}))(Login);
