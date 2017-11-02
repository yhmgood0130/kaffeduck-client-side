import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ImageBackground, StatusBar, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';


const Home = () => {
  return (
  <View style={styles.container}>
    <ImageBackground source={require('../../images/background.jpg')} style={styles.backgroundImage} >
    <View style={styles.logoContainer}>
    <Image
      source={require('../../images/logo.png')}
      style={styles.logo2}
      />
      <Image
        source={require('../../images/coffee_duck.jpeg')}
        style={styles.logo}
        />
      <Text style={styles.title}>Welcome to KaffeDuck! KaffDuck is very excited to show you high-quality coffee.</Text>
      <TouchableOpacity onPress={Actions.coffee} style={styles.ButtonStyle} activeOpacity={0.5}>
         <Text style={styles.TextStyle}>See Coffee & Brewing Method</Text>
      </TouchableOpacity>
     </View>
     </ImageBackground>
   </View>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoContainer: {
    flexGrow:1,
    alignItems: 'center',
    marginTop:50
  },
  logo: {
    width:150,
    height:150,
    borderRadius: 69
  },
  logo2: {
    width:150,
    height:120,
    marginTop:-40,
    marginBottom:-10
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: "center",
    fontWeight: '700'
  },
  title: {
    margin:50,
    fontSize:22,
    fontWeight: 'bold',
    fontFamily: 'Gurmukhi MN',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  ButtonStyle: {
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: 'rgb(147,156,76)',
   borderRadius: 5 ,
   margin: 13,
   position: 'absolute',
   bottom:68,
   height:70,
   width:300
 },
 ImageIconStyle: {
   padding: 10,
   margin: 5,
   height: 25,
   width: 25,
   resizeMode : 'stretch',
 },
 TextStyle :{
   flex:1,
   color: "#fff",
   marginBottom : 4,
   textAlign: 'center',
   fontSize:18,
   fontWeight: 'bold'
 },
 backgroundImage: {
   flex: 1,
   width: null,
   height: null,
 }
});

export default connect(({routes}) => ({routes}))(Home)
