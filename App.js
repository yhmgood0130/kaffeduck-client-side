/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux';
import { fetchCoffeeFromAPI } from './actions';

let styles;

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const App = (props) => {
  const {
    container,
    text,
    button,
    buttonText
  } = styles

  const { coffee, isFetching } = props.coffee;
  console.log("Coffee: ", props.coffee);

  return (
    <View style={container}>
      <Text style={text}>Welcome to React Native!</Text>
      <TouchableHighlight onPress={props.getCoffee} style={button}>
        <Text style={buttonText}>Fetch Data</Text>
      </TouchableHighlight>
      {
        isFetching && <Text>Loading</Text>
      }
      {
        coffee.length ? (
          coffee.map((coffee,index) => {
            return (
              <View key={index}>
                <Text>Name: {coffee.name}</Text>
                <Text>Birth year: {coffee.birth_year}</Text>
              </View>
            )
          })
        ) : null
      }
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingLeft: 20,
    paddingTop: 20
  },
  text: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'black',
    height:60,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText: {
    color: 'white'
  }
});

function mapStateToProps(state){
  return {
    coffee: state.coffee
  }
}

function mapDispatchToProps(dispatch){
  return {
    getCoffee: () => dispatch(fetchCoffeeFromAPI())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
