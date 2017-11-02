import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, ImageBackground, Image } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';


const Quiz3 = () => {
  return (
  <View style={styles.container}>
    <ImageBackground source={require('../../../images/background.jpg')} style={styles.backgroundImage} >
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../images/coffee_duck.jpeg')}
          style={styles.logo}
          />
        <Text style={styles.title}>The light, balanced flavor of most Central American coffees is ideal for many breakfast foods. What is your favorite choice from options below?</Text>

        <TouchableOpacity onPress={Actions.result} style={styles.AnswerButton} activeOpacity={0.5}>

           <Text style={styles.buttonFont}> Crepes </Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={Actions.result} style={styles.AnswerButton} activeOpacity={0.5}>

            <Text style={styles.buttonFont}> Eggs & Bacon/Sausage </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.result} style={styles.AnswerButton} activeOpacity={0.5}>

             <Text style={styles.buttonFont}> Pancakes with {"\n"} Maple Syrup </Text>
           </TouchableOpacity>
       </View>
     </ImageBackground>
   </View>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent"
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
  buttonFont: {
    fontSize:18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: "center"
  },
  title: {
    margin:20,
    fontSize:20,
    fontWeight: 'bold',
    fontFamily: 'Gurmukhi MN',
    textAlign: 'center'
  },
  AnswerButton: {
   flexGrow:1,
   alignItems: 'center',
   justifyContent: 'center',
   backgroundColor: 'rgb(147,156,76)',
   height: 69,
   width: 300,
   borderRadius: 5 ,
   margin: 13
 },
 TextStyle :{
   flex:1,
   color: "#fff",
   marginBottom : 4,
   marginRight :20,
   textAlign: 'center',
 },
 backgroundImage: {
   flex: 1,
   width: null,
   height: null,
 }
});


export default connect(({routes}) => ({routes}))(Quiz3)
