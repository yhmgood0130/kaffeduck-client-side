import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Provider, connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';


const Quiz = () => {
  return (
  <View style={styles.container}>

      <TouchableOpacity onPress={Actions.quiz1} style={styles.GooglePlusStyle} activeOpacity={0.5}>
        <Image
         source={require('../../../images/google.png')}
         style={styles.ImageIconStyle}
         />
         <View style={styles.SeparatorLine} />
         <Text style={styles.TextStyle}> Login Using Google Plus </Text>
       </TouchableOpacity>
   </View>
 )
}

const styles = StyleSheet.create({
  container:{
    padding:20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.4)',
    marginBottom: 10,
    color: '#560675',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#db822e',
    paddingVertical: 15,
    marginBottom:5
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: "center",
    fontWeight: '700'
  },
  GooglePlusStyle: {
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '#dc4e41',
   height: 40,
   borderRadius: 5 ,
   margin: 5,
 },
 FacebookStyle: {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#485a96',
  height: 40,
  borderRadius: 5 ,
  margin: 5,
 },
 ImageIconStyle: {
   padding: 10,
   margin: 5,
   height: 25,
   width: 25,
   resizeMode : 'stretch',
 },
 TextStyle :{
   color: "#fff",
   marginBottom : 4,
   marginRight :20,
 },
 SeparatorLine :{
   backgroundColor : '#fff',
   width: 1,
   height: 40
 }
});


export default connect(({routes}) => ({routes}))(Quiz)
