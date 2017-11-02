import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';


const Quiz = () => {
  return (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        source={require('../../../images/coffee_duck.jpeg')}
        style={styles.logo}
        />
      <Text style={styles.title}>Welcome to KaffeDuck! On the next page, KaffeDuck will waddle you through the quiz to help find you the perfect coffee based on your answers.</Text>
      <TouchableOpacity onPress={Actions.quiz1} style={styles.ButtonStyle} activeOpacity={0.5}>
         <Text style={styles.TextStyle}>Let&apos;s figure it out!</Text>
      </TouchableOpacity>
     </View>
   </View>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7d734"
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
    textAlign: 'center'
  },
  ButtonStyle: {
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '#dc4e41',
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
 }
});


export default connect(({routes}) => ({routes}))(Quiz)
