import React, { Component } from 'react';
import { Platform, Alert, AsyncStorage, StyleSheet, Text, View, TouchableOpacity, ScrollView, ImageBackground, Dimensions, Image } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import { fetchCoffeeFromAPI } from '../../actions';
import { fetchCoffeeMakerFromAPI } from '../../actions';

const endpoint = "http://localhost:8080/kaffeduck-api/";

let styles;
let itemType = "";
var alertMessage = 'The Item has been successfully added to your subscription.';
const parsedToken = AsyncStorage.getItem('access_token');

const Coffee = (props) => {
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
    coffeeMakerImage
  } = styles

  const { coffee, isFetching } = props.coffee;
  const { coffeeMaker } = props.coffeeMaker;

  addCart = (resourceId,itemType) => {
    let newOrder = {};
    
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
        <View style={coffeeContainer} key={coffee.resourceId}>
          <Image style={coffeeImage} source={{uri:coffee.url}} />
          <Text style={itemName}>{coffee.name}</Text>
          <Text style={itemDescription}>$ {coffee.price} - {coffee.size} oz</Text>
          <Text style={itemDescription}>{coffee.description}</Text>
          <View style={buttonContainer}>
            <TouchableOpacity onPress={this.confirmation.bind(this)} style={cartButton}><Text style={buttonText}>Add Cart</Text></TouchableOpacity>
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
        <View style={coffeeContainer} key={coffee.resourceId}>
          <Image style={coffeeImage} source={{uri:coffee.url}} />
          <Text style={itemName}>{coffee.name}</Text>
          <Text style={itemDescription}>$ {coffee.price} - {coffee.size} oz</Text>
          <Text style={itemDescription}>{coffee.description}</Text>
          <View style={buttonContainer}>
            <TouchableOpacity key={coffee.resourceId} onPress={this.confirmation.bind(this)} style={cartButton}><Text style={buttonText}>Add Cart</Text></TouchableOpacity>
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
        <View style={coffeeContainer} key={coffee.resourceId}>
          <Image style={coffeeImage} source={{uri:coffee.url}} />
          <Text style={itemName}>{coffee.name}</Text>
          <Text style={itemDescription}>$ {coffee.price} - {coffee.size} oz</Text>
          <Text style={itemDescription}>{coffee.description}</Text>
          <View style={buttonContainer}>
            <TouchableOpacity onPress={this.confirmation.bind(this)} style={cartButton}><Text style={buttonText}>Add Cart</Text></TouchableOpacity>
          </View>
        </View>
      )
    }
    })
  }
  coffeeMakers = () => {

    return coffeeMaker.map((coffeeMaker,index) => {
      return (
        <View style={coffeMakerContainer} key={coffeeMaker.resourceId}>
          <Image style={coffeeMakerImage} source={{uri:coffeeMaker.url}} />
          <Text style={itemName}>{coffeeMaker.name}</Text>
          <Text style={itemDescription}>$ {coffeeMaker.price} </Text>
          <View style={buttonContainer}>
            <TouchableOpacity onPress={this.confirmation.bind(this)} style={cartButton}><Text style={buttonText}>Add Cart</Text></TouchableOpacity>
          </View>
        </View>
      )
    })
  }
  confirmation = () => {
      Alert.alert(
      'Item Added',
      alertMessage,
      [
        {text: 'OK'},
      ]
    )
  }

  return (
    <ScrollView style={container}>
      <ImageBackground source={require('../../images/background.jpg')} style={backgroundImage} >
        <Text style={title}>Light Roast</Text>
        <View style={items} >
          {this.lightRoast()}
        </View>
        <Text style={title}>Medium Roast</Text>
        <View style={items} >
          {this.mediumRoast()}
        </View>
        <Text style={title}>Bold Roast</Text>
        <View style={items} >
          {this.boldRoast()}
        </View>
        <Text style={title}>Coffee Maker</Text>
        <View style={items} >
          {this.coffeeMakers()}
        </View>
      </ImageBackground>
    </ScrollView>
  );
}

// <TouchableOpacity key={coffee.resourceId} onPress={this.addCart.bind(this,coffee.resourceId,itemType)} style={cartButton}><Text style={buttonText}>Add Cart</Text></TouchableOpacity>

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
    backgroundColor: 'red'
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

export default connect(mapStateToProps, mapDispatchToProps)(Coffee)
