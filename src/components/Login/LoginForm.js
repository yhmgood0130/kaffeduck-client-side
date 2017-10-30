import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image, Dimensions } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

const provider = new firebase.auth.FacebookAuthProvider;
const credential = provider.credential(token);
// provider.setCustomParameters({
//   'display': 'popup'
// });

export default class LogInForm extends Component {
  state = { email: '', password: '', error: '', loading: false };
  onLoginPress() {
      this.setState({ error: '', loading: true });

      const { email, password } = this.state;

      firebase.auth().signInWithCredential(credential);

      firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        var token = result.credential.accessToken;
      }
          var user = result.user;
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
        });


      // firebase.auth().signInWithEmailAndPassword(email, password)
      //     .then(() => { this.setState({ error: '', loading: false }); })
      //     .catch(() => {
      //         this.setState({ error: 'Authentication failed.', loading: false });
      //     });
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
           <TouchableOpacity onPress={Actions.home} style={styles.GooglePlusStyle} activeOpacity={0.5}>
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

// <TouchableOpacity onPress={Actions.quiz} style={styles.FacebookStyle} activeOpacity={0.5}>

// onSubmitEditing={() => this.passwordInput.focus()}

// ref={(input) => this.passwordInput = input}

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
