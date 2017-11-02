import React, { Component } from 'react';
import { Platform, AsyncStorage, StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Dimensions, Image } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { fetchCoffeeFromAPI } from '../../actions';
import { fetchCoffeeMakerFromAPI } from '../../actions';

const endpoint = "http://localhost:8080/kaffeduck-api/";

let styles;
let itemType = "";
const parsedToken = AsyncStorage.getItem('access_token');

const Subscription = (props) => {
  const {
    container,
    title,
    button,
    buttonText,
    coffeeContainer,
    items,
    coffeeImage,
    addDelelteButton,
    buttonContainer,
    cartButton,
    itemDescription,
    backgroundImage,
    character,
    itemName,
    coffeMakerContainer,
    coffeeMakerImage,
    itemPrice
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

  coffeeList = () => {
      return (
        <View style={items} >
          <View style={coffeeContainer} key={coffee[2].resourceId}>
            <Image style={coffeeImage} source={{uri:coffee[2].url}} />
            <Text style={itemName}>{coffee[2].name}</Text>
            <Text style={itemPrice}>$ {coffee[2].price} - {coffee[2].size} oz</Text>
            <Text style={itemDescription}>{coffee[2].description}</Text>
            <View style={buttonContainer}>
              <TouchableOpacity style={cartButton}><Text style={buttonText}>Remove</Text></TouchableOpacity>
            </View>
          </View>
          <View style={coffeeContainer} key={coffee[4].resourceId}>
            <Image style={coffeeImage} source={{uri:coffee[4].url}} />
            <Text style={itemName}>{coffee[4].name}</Text>
            <Text style={itemPrice}>$ {coffee[4].price} - {coffee[4].size} oz</Text>
            <Text style={itemDescription}>{coffee[4].description}</Text>
            <View style={buttonContainer}>
              <TouchableOpacity style={cartButton}><Text style={buttonText}>Remove</Text></TouchableOpacity>
            </View>
          </View>
          <View style={coffeeContainer} key={coffee[10].resourceId}>
            <Image style={coffeeImage} source={{uri:coffee[10].url}} />
            <Text style={itemName}>{coffee[10].name}</Text>
            <Text style={itemPrice}>$ {coffee[10].price} - {coffee[10].size} oz</Text>
            <Text style={itemDescription}>{coffee[10].description}</Text>
            <View style={buttonContainer}>
              <TouchableOpacity style={cartButton}><Text style={buttonText}>Remove</Text></TouchableOpacity>
            </View>
          </View>
        </View>
      )
  }

  coffeeMakers = () => {

      return (
        <View style={coffeMakerContainer} key={coffeeMaker[1].resourceId}>
          <Image style={coffeeMakerImage} source={require('../../images/pourover.png')} />
          <Text style={itemName}>{coffeeMaker[1].name}</Text>
          <Text style={itemPrice}>$ {coffeeMaker[1].price} </Text>
          <View style={buttonContainer}>
            <TouchableOpacity style={cartButton}><Text style={buttonText}>Remove</Text></TouchableOpacity>
          </View>
        </View>
      )
  }

  return (
    <ScrollView style={container}>
      <ImageBackground source={require('../../images/background.jpg')} style={backgroundImage} >
        <Text style={title}>Monthly Subscription</Text>
          {this.coffeeList()}
        <Text style={title}>One-Time Delivery</Text>
        <View style={items} >
          {this.coffeeMakers()}
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

const resizeMode = 'repeat';

styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  title: {
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold',
    fontSize:24,
    fontFamily: 'Gurmukhi MN',
    textAlign: 'center',
    backgroundColor: '#ab6454'
  },
  character: {
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold',
    fontSize: 16
  },
  itemName: {
    textAlign: 'center',
    padding: 5,
    fontWeight: 'bold',
    fontSize:26
  },
  button: {
    backgroundColor: 'black',
    height:60,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText: {
    fontSize:24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: "center"
  },
  items: {
    flex:1,
    flexDirection: 'row',
    flexWrap:'wrap',
    alignItems: 'center',
  },
  itemPrice: {
    fontSize:18,
    paddingBottom:5,
    fontWeight: 'bold'
  },
  coffeeImage: {
    height:330,
    width: 120,
    marginBottom: -10,
    resizeMode: 'contain',
    justifyContent:'center',
    alignItems:'center'
  },
  coffeeMakerImage: {
    height:300,
    width: 150,
    marginBottom: -30,
    resizeMode: 'contain',
    justifyContent:'center',
    alignItems:'center'
  },
  coffeeContainer: {
    margin:2,
    height:569,
    width:Dimensions.get('window').width / 2 - 4,
    justifyContent: 'center',
    alignItems:'center'
  },
  coffeMakerContainer: {
    margin:2,
    height:420,
    width:Dimensions.get('window').width / 2 - 4,
    justifyContent: 'center',
    alignItems:'center'
  },
  buttonContainer: {
    flex:1,
    height: 78,
    width: 150,
    alignItems: 'center',
  },
  cartButton: {
    backgroundColor: 'rgb(147,156,76)',
    padding: 5,
    width:170,
    height:40,
    borderRadius:30,
    position: 'absolute',
    bottom: 20
  },
  itemDescription: {
    paddingBottom: 5,
    width:130,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null
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

export default connect(mapStateToProps, mapDispatchToProps)(Subscription)
