import React, { Component } from 'react';
import { AsyncStorage, View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import FBSDK, { LoginManager, AccessToken } from 'react-native-fbsdk'
import firebase from 'firebase';

export default class LogInForm extends Component {

  state = { email: '', password: '', error: '', loading: false };

  async saveItem(item, selectedValue) {
    try {
      await AsyncStorage.setItem(item, selectedValue);
    } catch (error) {
      console.error('AsyncStorage error: ' + error.message);
    }
  }

  onLoginPress() {
      this.setState({ error: '', loading: true });

      const { email, password } = this.state;

      LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
        function(result) {
          if(result.isCancelled){
            alert('Login cancelled');
          } else {
            AccessToken.getCurrentAccessToken().then((accessTokenData) => {
              const credential = firebase.auth.FacebookAuthProvider.credential(accessTokenData.accessToken)
              firebase.auth().signInWithCredential(credential).then((result) => {
                var token = firebase.auth().currentUser.getIdToken(true)
                  .then((idToken) => {
                    var base64Url = idToken.split('.')[1];
                    var base64 = base64Url.replace('-', '+').replace('_', '/');
                    let parsedToken = JSON.parse(window.atob(base64)).user_id;
                    AsyncStorage.setItem('access_token', parsedToken);
                    let token = AsyncStorage.getItem('access_token');
                    console.log(token);
                    console.log(parsedToken);
                    Actions.quiz();
                  })
              }, (error) => {
                console.log(error);
              })
            }, (error => {
              console.log('Some error occured: ' + error);
            }))
          }
        }
      )
  }
  render() {
    return (
        <View style={styles.container}>
          <StatusBar
            barStyle="light-content"
            />
          <TextInput
            placeholder="username or email"
            placeholderTextcolor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
            />
          <TextInput
            placeholder="password"
            placeholderTextcolor="rgba(255,255,255,0.7)"
            returnKeyType="go"
            secureTextEntry
            style={styles.input}
            ref={(input) => this.passwordInput = input}
            />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Actions.signup} style={styles.buttonContainer}>
            <Text style={styles.buttonText}>CREATE YOUR ACCOUNT</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onLoginPress.bind(this)} style={styles.FacebookStyle} activeOpacity={0.5}>
             <Image
              source={require('../../images/facebook.png')}
              style={styles.ImageIconStyle}
              />
             <View style={styles.SeparatorLine} />
             <Text style={styles.TextStyle}> Login Using Facebook </Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={Actions.coffee} style={styles.GooglePlusStyle} activeOpacity={0.5}>
             <Image
              source={require('../../images/google.png')}
              style={styles.ImageIconStyle}
              />
              <View style={styles.SeparatorLine} />
              <Text style={styles.TextStyle}> Login Using Google Plus </Text>
            </TouchableOpacity>
          </View>
    );
  }
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
    backgroundColor: 'rgb(147,156,76)',
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
