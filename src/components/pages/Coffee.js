import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { fetchCoffeeFromAPI } from '../../actions';

let styles;

const Coffee = (props) => {
  const {
    container,
    text,
    button,
    buttonText
  } = styles

  const { coffee, isFetching } = props.coffee;

  lightRoast = () => {
    return coffee.map((coffee,index) => {
      if(coffee.roast_type === "Light Roast"){
      return (
        <View key={index}>
          <Text>{coffee.name}</Text>
          <Text>$ {coffee.price} {coffee.size} oz</Text>
          <Text>{coffee.size} oz</Text>
        </View>
      )
    }
    })
  }
  mediumRoast = () => {
    return coffee.map((coffee,index) => {
      if(coffee.roast_type === "Medium Roast"){
      return (
        <View key={index}>
          <Text>{coffee.name}</Text>
          <Text>$ {coffee.price} {coffee.size} oz</Text>
          <Text>{coffee.size} oz</Text>
        </View>
      )
    }
    })
  }
  darkRoast = () => {
    return coffee.map((coffee,index) => {
      if(coffee.roast_type === "Dark Roast"){
      return (
        <View key={index}>
          <Text>{coffee.name}</Text>
          <Text>$ {coffee.price} {coffee.size} oz</Text>
          <Text>{coffee.size} oz</Text>
        </View>
      )
    }
    })
  }

  return (
    <ScrollView style={container}>
      <Text style={text}>Welcome to React Native!</Text>
      <Text style={text}>Light Roast</Text>
      {this.lightRoast()}
      <Text style={text}>Medium Roast</Text>
      {this.mediumRoast()}
      <Text style={text}>Dark Roast</Text>
      {this.darkRoast()}
    </ScrollView>
  );
}
// <TouchableHighlight onPress={this.getCoffee} style={button}>
//   <Text style={buttonText}>Fetch Data</Text>
// </TouchableHighlight>

styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20
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

export default connect(mapStateToProps, mapDispatchToProps)(Coffee)
