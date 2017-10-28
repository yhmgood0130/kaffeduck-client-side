import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';


const Result = () => {
  return (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        source={require('../../../images/coffee_duck.jpeg')}
        style={styles.logo}
        />
      <Text style={styles.title}>Congratulation! Here&apos;s what KaffeDuck found your you based on your answers.</Text>

      <Text>Suggested Coffees</Text>
      <TouchableOpacity onPress={Actions.home} style={styles.GooglePlusStyle} activeOpacity={0.5}>

         <Text style={styles.TextStyle}> Login Using Facebook </Text>
       </TouchableOpacity>
      <Text>Suggested Brewing Method</Text>
       <TouchableOpacity onPress={Actions.home} style={styles.GooglePlusStyle} activeOpacity={0.5}>

          <Text style={styles.TextStyle}> Login Using Facebook </Text>
        </TouchableOpacity>
       <TouchableOpacity onPress={Actions.home} style={styles.GooglePlusStyle} activeOpacity={0.5}>

         <Text style={styles.TextStyle}> Would like to see more coffees? {'\n'} Click here to explore more! </Text>
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
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.4)',
    marginBottom: 10,
    color: 'green',
    paddingHorizontal: 10
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
  buttonContainer: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    marginBottom:5
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: "center",
    fontWeight: '700'
  },
  title: {
    margin:50
  },
  GooglePlusStyle: {
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '#dc4e41',
   height: 80,
   borderRadius: 5 ,
   margin: 13
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
   marginRight :20,
   textAlign: 'center',
 }
});


export default connect(({routes}) => ({routes}))(Result)
