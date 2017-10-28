import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';


const Quiz2 = () => {
  return (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        source={require('../../../images/coffee_duck.jpeg')}
        style={styles.logo}
        />
      <Text style={styles.title}>Explore the coffee world with KaffeDuck. This Duck will help you to choose the right type of coffee for you.</Text>

      <TouchableOpacity onPress={Actions.quiz3} style={styles.GooglePlusStyle} activeOpacity={0.5}>

         <Text style={styles.TextStyle}> Login Using Facebook </Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={Actions.quiz3} style={styles.GooglePlusStyle} activeOpacity={0.5}>

          <Text style={styles.TextStyle}> Login Using Facebook </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Actions.quiz3} style={styles.GooglePlusStyle} activeOpacity={0.5}>

           <Text style={styles.TextStyle}> Login Using Facebook </Text>
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


export default connect(({routes}) => ({routes}))(Quiz2)
