import React, { Component } from 'react';
import { Platform, AsyncStorage, StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { fetchCoffeeFromAPI } from '../../actions';
import { fetchCoffeeMakerFromAPI } from '../../actions';

const endpoint = "http://localhost:8080/kaffeduck-api/";

let styles;
let itemType = "";
const parsedToken = AsyncStorage.getItem('access_token');

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
    cartButton,
    itemDescription
  } = styles

  const { coffee, isFetching } = props.coffee;
  const { coffeeMaker } = props.coffeeMaker;

  addCart = (resourceId,itemType) => {
    let newOrder = {};

    console.log(resourceId,itemType);
    switch(itemType){
      case "coffee":
      newOrder = {
        "customer": "/customers/1",
        "coffee": `/coffees/${resourceId}`
      };
      break;
      case "coffeemaker":
      newOrder = {
        "customer": "/customers/1",
        "coffeemaker": `/coffeemakers/${resourceId}`
      };
      break;
      default:
      console.log("Invalid type");
    }

    let settings = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newOrder)
    }

    fetch(`${endpoint}subscriptions/`, settings)
    .then((response) => response.json())
  }

  lightRoast = () => {
    itemType = "coffee";
    return coffee.map((coffee,index) => {
      if(coffee.roast_type === "Light Roast"){
      return (
        <View style={itemContainer} key={coffee.resourceId}>
          <Image style={itemImage} source={{uri:coffee.url}} />
          <Text style={itemDescription}>{coffee.name}</Text>
          <Text style={itemDescription}>$ {coffee.price}</Text>
          <Text style={itemDescription}>{coffee.size} oz</Text>
          <View style={buttonContainer}>
            <TouchableOpacity style={cartButton}><Text>Add Cart</Text></TouchableOpacity>
          </View>
        </View>
      )
    }
    })
  }

  mediumRoast = () => {
    itemType = "coffee";
    return coffee.map((coffee,index) => {
      if(coffee.roast_type === "Medium Roast"){
      return (
        <View style={itemContainer} key={coffee.resourceId}>
          <Image style={itemImage} source={{uri:coffee.url}} />
          <Text style={itemDescription}>{coffee.name}</Text>
          <Text style={itemDescription}>$ {coffee.price}</Text>
          <Text style={itemDescription}>{coffee.size} oz</Text>
          <View style={buttonContainer}>
            <TouchableOpacity key={coffee.resourceId} onPress={this.addCart.bind(this,coffee.resourceId,itemType)} style={cartButton}><Text>Add Cart</Text></TouchableOpacity>
          </View>
        </View>
      )
    }
    })
  }
  boldRoast = () => {
    itemType = "coffee";
    return coffee.map((coffee,index) => {
      if(coffee.roast_type === "Bold Roast"){
      return (
        <View style={itemContainer} key={coffee.resourceId}>
          <Image style={itemImage} source={{uri:coffee.url}} />
          <Text style={itemDescription}>{coffee.name}</Text>
          <Text style={itemDescription}>$ {coffee.price}</Text>
          <View style={buttonContainer}>
            <TouchableOpacity style={cartButton}><Text>Add Cart</Text></TouchableOpacity>
          </View>
        </View>
      )
    }
    })
  }
  coffeeMakers = () => {

    return coffeeMaker.map((coffeeMaker,index) => {
      return (
        <View key={coffeeMaker.resourceId}>
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
// <TouchableOpacity style={cartButton}><Text>+</Text></TouchableOpacity>
// <TouchableOpacity style={cartButton}><Text>-</Text></TouchableOpacity>
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
  cartButton: {
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
