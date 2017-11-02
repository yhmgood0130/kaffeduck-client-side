import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail,  Left, Body, Icon } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { fetchCoffeeFromAPI } from '../../../actions';
import { fetchCoffeeMakerFromAPI } from '../../../actions';


const Result = (props) => {
  const { coffee } = props.coffee;
  const { coffeeMaker } = props.coffeeMaker;

  displayCoffee = () => {
    itemType = "coffee";
      return coffee.map((coffee,index) => {
      if(coffee.roast_type === "Medium Roast" && index < 3){
        return (
          <View style={styles.itemContainer} key={coffee.resourceId}>
            <Image style={styles.itemImage} source={{uri:coffee.url}} />
            <Text style={styles.itemDescription}>{coffee.name}</Text>
            <Text style={styles.itemDescription}>$ {coffee.price} - {coffee.size} oz</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity key={coffee.resourceId} onPress={this.addCart.bind(this,coffee.resourceId,itemType)} style={styles.cartButton}><Text>Add Cart</Text></TouchableOpacity>
            </View>
          </View>
        )
     }
   })
  }

  displayCoffeeMethod = () => {
    itemType="coffeemaker";
    return(
      <View style={styles.itemContainer}>
        <Image style={styles.itemImage} source={{uri:coffeeMaker[0].url}} />
        <Text style={styles.itemDescription}>{coffeeMaker[0].name}</Text>
        <Text style={styles.itemDescription}>$ {coffeeMaker[0].price}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity key={coffeeMaker[0].resourceId} onPress={this.addCart.bind(this,coffeeMaker[0].resourceId,itemType)} style={styles.cartButton}><Text>Add Cart</Text></TouchableOpacity>
        </View>
      </View>
    )
  }

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

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={require('../../../images/background.jpg')} style={styles.backgroundImage} >
        <Text style={styles.title}>Match Result</Text>
        <Text style={styles.SuggestionText}>Suggested Coffees</Text>
        <View style={styles.Items}>
         {this.displayCoffee()}
        </View>
        <Text style={styles.SuggestionText}>Suggested Coffee Method</Text>
        <View style={styles.Items}>
         {this.displayCoffeeMethod()}
        </View>
        <TouchableOpacity onPress={Actions.home} style={styles.AnswerButton} activeOpacity={0.5}>
          <Text style={styles.ButtonFont}> Would like to see more coffees? {'\n'} Click here to explore more! </Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor:'transparent'
  },
  logoContainer: {
    flexGrow:1,
    alignItems: 'center',
    marginTop:50
  },
  logo: {
    width:100,
    height:100,
    borderRadius: 49
  },
  ButtonFont: {
    color: '#FFFFFF',
    textAlign: "center",
    fontWeight: '700'
  },
  title: {
    margin:26,
    fontSize:14,
    lineHeight: 16,
    fontWeight: 'bold',
    fontFamily: 'Gurmukhi MN',
    textAlign: 'center'
  },
  SuggestionText: {
    padding:10,
    fontSize:14,
    fontWeight: 'bold',
    fontFamily: 'Gurmukhi MN',
    textAlign: 'center',
    backgroundColor: "blue"
  },
  AnswerButton: {
   backgroundColor: 'rgb(147,156,76)',
   borderRadius: 5 ,
   padding: 10,
   margin: 10
 },
 Items: {
   flexGrow:1,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center'
 },
 itemContainer: {
   padding:10,
   height:220,
   width:Dimensions.get('window').width / 2.2,
   alignItems:'center'
 },
 cartButton: {
   backgroundColor: 'rgba(255,62,255,0.8)',
   padding: 5
 },
 itemDescription: {
   paddingBottom: 5
 },
 itemImage: {
   height:120,
   width: 70,
   marginBottom: 5
 },
 backgroundImage: {
   flex: 1,
   width: null,
   height: null,
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


export default connect(mapStateToProps, mapDispatchToProps)(Result)
