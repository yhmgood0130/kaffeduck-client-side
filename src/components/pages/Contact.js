import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Communications from 'react-native-communications';

const Contact = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../images/coffee-bean2.jpg')} style={styles.backgroundImage} >
        <View style={styles.logoContainer}>
          <Image
            source={require('../../images/me.png')}
            style={styles.picture}
            />
        </View>
        <Text style={styles.name}>Hyunmo "Moe"</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity onPress={() => Communications.phonecall('7205457597', true)} style={styles.socialStyle} activeOpacity={0.5}>
            <Image source={require('../../images/phone.png')} style={styles.socialLogo} />
            <Text style={styles.social}>(720)-545-7597</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Communications.email(['yhmgood0130@gmail.com', 'emailAddress2'],null,null,'My Subject','My body text')} style={styles.socialStyle} activeOpacity={0.5}>
            <Image source={require('../../images/email.png')} style={styles.socialLogo} />
            <Text style={styles.email}>yhmgood0130@gmail.com</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://github.com/yhmgood0130/')} style={styles.socialStyle} activeOpacity={0.5}>
            <Image source={require('../../images/github.png')} style={styles.socialLogo} />
            <Text style={styles.social}>/yhmgood0130</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/hyunmoyang13')} style={styles.socialStyle} activeOpacity={0.5}>
            <Image source={require('../../images/facebook.png')} style={styles.socialLogo} />
            <Text style={styles.social}>/hyunmoyang13</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/hyunmoyang/')} style={styles.socialStyle} activeOpacity={0.5}>
            <Image source={require('../../images/linkedin.png')} style={styles.socialLogo} />
            <Text style={styles.social}>/in/hyunmoyang/</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View >
  )
}
// Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logoContainer: {
    flexGrow:1,
    alignItems: 'center',
    marginTop:30,
    marginBottom:10
  },
  socialContainer: {
    flexGrow:1,
    justifyContent: 'flex-end',
  },
  picture: {
    width: Dimensions.get('window').width,
    height:150,
    width:150,
    borderRadius:75,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  name: {
    padding:10,
    fontSize: 34,
    fontWeight: 'bold',
    color: "#FFFFFF",
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center',
  },
  socialStyle: {
   flexDirection: 'row',
   alignItems: 'center',
   backgroundColor: '#dc4e41',
   width: Dimensions.get('window').width,
   backgroundColor: 'rgba(0,0,0,0.6)',
   padding:10
 },
 email: {
   width: Dimensions.get('window').width,
   padding:13,
   marginLeft: 48,
   fontSize: 18,
   fontWeight: 'bold',
   color: "#FFFFFF",
   backgroundColor: 'rgba(0,0,0,0)',
   textAlign: 'center',
 },
  social: {
    width: Dimensions.get('window').width,
    padding:13,
    fontSize: 18,
    fontWeight: 'bold',
    color: "#FFFFFF",
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center',
  },
  socialLogo: {
    height: 40,
    width: 40,
    resizeMode : 'stretch',
    position: 'absolute',
    left: 40,
  },
  TextStyle :{
    color: "#fff",
    marginBottom : 4,
    marginRight :20,
  },
})

export default connect(({routes}) => ({routes}))(Contact)
