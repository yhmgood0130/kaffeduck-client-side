import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

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
        <Text style={styles.social}>Hyunmo "Moe" Yang</Text>
        <View style={styles.socialContainer}>
          <Text style={styles.social}>Email</Text>
          <Text style={styles.social}>Phone</Text>
          <Text style={styles.social}>GitHub</Text>
          <Text style={styles.social}>Facebook<Image source={require('../../images/facebook.png')} style={styles.socialLogo} /></Text>
          <Text style={styles.social}>LinkedIn</Text>
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
    height:200,
    width:200,
    borderRadius:100,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  social: {
    width: Dimensions.get('window').width,
    padding:13,
    fontSize: 20,
    borderWidth:4,
    backgroundColor: 'rgba(0,0,0,0)',
    textAlign: 'center',
  },
  socialLogo: {
    justifyContent:'flex-end',
    padding: 10,
    margin: 5,
    height: 50,
    width: 50,
    resizeMode : 'stretch',
  }
})

export default connect(({routes}) => ({routes}))(Contact)
