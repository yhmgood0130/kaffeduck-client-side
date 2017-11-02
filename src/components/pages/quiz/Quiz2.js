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
      <Text style={styles.title}>What would Italians do without coffee and biscotti? What would Canadians and Americans do without their doughnuts and coffee? What is your favorite choice from options below?</Text>

      <TouchableOpacity onPress={Actions.quiz3} style={styles.AnswerButton} activeOpacity={0.5}>
         <Text style={styles.buttonFont}> Biscotti </Text>
       </TouchableOpacity>
       <TouchableOpacity onPress={Actions.quiz3} style={styles.AnswerButton} activeOpacity={0.5}>
          <Text style={styles.buttonFont}> Cinnamon Buns </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Actions.quiz3} style={styles.AnswerButton} activeOpacity={0.5}>
           <Text style={styles.buttonFont}> Doughnuts </Text>
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
   backgroundColor: '#dc4e41',
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
 }
});

export default connect(({routes}) => ({routes}))(Quiz2)
