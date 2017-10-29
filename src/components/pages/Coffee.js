import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { fetchCoffeeFromAPI } from '../../actions';
import { fetchCoffeeMakerFromAPI } from '../../actions';

let styles;

const Coffee = (props) => {
  const {
    container,
    text,
    button,
    buttonText,
    itemContainer,
    items,
    itemImage,
    addDelelteButton,
    buttonContainer,
    cartButtons,
    itemDescription
  } = styles

  const { coffee, isFetching } = props.coffee;
  const { coffeeMaker } = props.coffeeMaker;

  lightRoast = () => {
    return coffee.map((coffee,index) => {
      if(coffee.roast_type === "Light Roast"){
      return (
        <View style={itemContainer} key={index}>
          <Image style={itemImage} source={{uri:coffee.url}} />
          <Text style={itemDescription}>{coffee.name}</Text>
          <Text style={itemDescription}>$ {coffee.price}</Text>
          <Text style={itemDescription}>{coffee.size} oz</Text>
          <View style={buttonContainer}>
            <TouchableOpacity style={cartButtons}><Text>Add Cart</Text></TouchableOpacity>
          </View>
        </View>
      )
    }
    })
  }
  mediumRoast = () => {
    return coffee.map((coffee,index) => {
      if(coffee.roast_type === "Medium Roast"){
      return (
        <View style={itemContainer} key={index}>
          <Image style={itemImage} source={{uri:coffee.url}} />
          <Text style={itemDescription}>{coffee.name}</Text>
          <Text style={itemDescription}>$ {coffee.price}</Text>
          <Text style={itemDescription}>{coffee.size} oz</Text>
          <View style={buttonContainer}>
            <TouchableOpacity style={cartButtons}><Text>Add Cart</Text></TouchableOpacity>
          </View>
        </View>
      )
    }
    })
  }
  boldRoast = () => {
    return coffee.map((coffee,index) => {
      if(coffee.roast_type === "Bold Roast"){
      return (
        <View style={itemContainer} key={index}>
          <Image style={itemImage} source={{uri:coffee.url}} />
          <Text style={itemDescription}>{coffee.name}</Text>
          <Text style={itemDescription}>$ {coffee.price}</Text>
          <Text style={itemDescription}>{coffee.size} oz</Text>
          <View style={buttonContainer}>
            <TouchableOpacity style={cartButtons}><Text>Add Cart</Text></TouchableOpacity>
          </View>
        </View>
      )
    }
    })
  }
  coffeeMakers = () => {
    return coffeeMaker.map((coffeeMaker,index) => {
      return (
        <View key={index}>
          <Text>{coffeeMaker.name}</Text>
          <Text>$ {coffeeMaker.price} </Text>
        </View>
      )
    })
  }

  return (
    <ScrollView style={container}>
      <Text style={text}>Welcome to React Native!</Text>
      <Text style={text}>Light Roast</Text>
      <View style={items} >
        {this.lightRoast()}
      </View>
      <Text style={text}>Medium Roast</Text>
      <View style={items} >
        {this.mediumRoast()}
      </View>
      <Text style={text}>Bold Roast</Text>
      <View style={items} >
        {this.boldRoast()}
      </View>
      <Text style={text}>Coffee Maker</Text>
      <View style={items} >
        {this.coffeeMakers()}
      </View>
    </ScrollView>
  );
}
// <TouchableOpacity style={cartButtons}><Text>+</Text></TouchableOpacity>
// <TouchableOpacity style={cartButtons}><Text>-</Text></TouchableOpacity>
// For buttonContainer flexDirection: 'row',

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
  },
  items: {
    flexGrow:1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    height:250,
    width: 100,
    marginBottom: 10
  },
  itemContainer: {
    padding:10,
    height:400,
    width:Dimensions.get('window').width / 2.2,
    borderWidth:4,
    alignItems:'center'
  },
  buttonContainer: {
    flex:1,
    height: 20,
    width:150,
    alignItems: 'center',
  },
  cartButtons: {
    backgroundColor: 'rgba(255,62,255,0.8)',
    padding: 5
  },
  itemDescription: {
    paddingBottom: 5
  }
});

function mapStateToProps(state){
  return {
    coffee: state.coffee,
    coffeeMaker: state.coffeeMaker
  }
}

function mapDispatchToProps(dispatch){
  return {
    getCoffee: () => dispatch(fetchCoffeeFromAPI()),
    getCoffeeMaker: () => dispatch(fetchCoffeeMakerFromAPI())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coffee)
