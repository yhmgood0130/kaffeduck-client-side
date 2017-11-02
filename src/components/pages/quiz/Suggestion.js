import React from 'react';
import { ScrollView, Alert, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail,  Left, Body, Icon } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { fetchCoffeeFromAPI } from '../../../actions';
import { fetchCoffeeMakerFromAPI } from '../../../actions';


const Suggestion = (props) => {
  const { coffee } = props.coffee;
  const { coffeeMaker } = props.coffeeMaker;
  const alertMessage = 'The Item has been successfully added to your subscription.';

  displayCoffee = () => {
    itemType = "coffee";
      return coffee.map((coffee,index) => {
      if(coffee.roast_type === "Medium Roast" && index < 3){
        return (
          <View style={styles.coffeeContainer} key={coffee.resourceId}>
            <Image style={styles.coffeeImage} source={{uri:coffee.url}} />
            <Text style={styles.itemName}>{coffee.name}</Text>
            <Text style={styles.itemPrice}>$ {coffee.price} - {coffee.size} oz</Text>
            <Text style={styles.itemDescription}>{coffee.description}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity key={coffee.resourceId} onPress={this.confirmation.bind(this)} style={styles.cartButton}><Text style={styles.buttonText}>Add Cart</Text></TouchableOpacity>
            </View>
          </View>
        )
     }
   })
  }

  displayCoffeeMethod = () => {
    itemType="coffeemaker";
    return(
      <View style={styles.coffeMakerContainer}>
        <Image style={styles.coffeeMakerImage} source={require('../../../images/frenchpress.png')} />
        <Text style={styles.itemName}>{coffeeMaker[0].name}</Text>
        <Text style={styles.itemDescription}>$ {coffeeMaker[0].price} </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.confirmation.bind(this)} style={styles.cartButton}><Text style={styles.buttonText}>Add Cart</Text></TouchableOpacity>
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
    <ScrollView style={styles.container}>
      <Image source={require('../../../images/background.jpg')} style={styles.backgroundImage}>
        <Text style={styles.SuggestionText}>Suggested Coffees</Text>
        <View style={styles.Items}>
         {this.displayCoffee()}
        </View>
        <Text style={styles.SuggestionText}>Suggested Coffee Method</Text>
        <View style={styles.Items}>
         {this.displayCoffeeMethod()}
        </View>
        <TouchableOpacity onPress={Actions.home} style={styles.AnswerButton} activeOpacity={0.5}>
          <Text style={styles.buttonText}> Click here to explore more! </Text>
        </TouchableOpacity>
      </Image>
    </ScrollView>
 )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent"
  },
  SuggestionText: {
    textAlign: 'center',
    padding: 20,
    fontWeight: 'bold',
    fontSize:22,
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
    fontWeight: 'bold',
    fontSize:23,
    paddingTop:5
  },
  button: {
    backgroundColor: 'black',
    height:60,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText: {
    fontSize:16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: "center"
  },
  Items: {
    flex:1,
    flexDirection: 'row',
    flexWrap:'wrap',
    alignItems: 'center',
  },
  coffeeImage: {
    height:100,
    width: 40,
    marginBottom: -10,
    resizeMode: 'contain',
    justifyContent:'center',
    alignItems:'center'
  },
  coffeeMakerImage: {
    height:150,
    width: 60,
    marginBottom: -30,
    resizeMode: 'contain',
    justifyContent:'center',
    alignItems:'center'
  },
  coffeeContainer: {
    margin:2,
    height:300,
    width:Dimensions.get('window').width / 2 - 4,
    justifyContent: 'center',
    alignItems:'center'
  },
  coffeMakerContainer: {
    margin:2,
    height:250,
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
    width:140,
    height:30,
    borderRadius:30,
    position: 'absolute',
    bottom: 20
  },
  AnswerButton: {
    backgroundColor: '#585e2b',
    padding: 20
  },
  itemDescription: {
    paddingBottom: 5,
    width:130,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  itemPrice: {
    fontSize:18,
    fontWeight: 'bold',
    paddingBottom:2
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


export default connect(mapStateToProps, mapDispatchToProps)(Suggestion)
