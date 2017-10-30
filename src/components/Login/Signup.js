import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import firebase from 'firebase';
import TitledInput from './TitledInput';
// import Spinner from './Spinner';

export default class SignupForm extends Component {
    state = { email: '', password: '', error: '', loading: false };
    onSignUpPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { this.setState({ error: '', loading: false }); })
            .catch(() => {
                //Login was not successful, let's create a new account
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => { this.setState({ error: '', loading: false }); })
                    .catch(() => {
                        this.setState({ error: 'Authentication failed.', loading: false });
                    });
            });
    }
    renderButtonOrSpinner() {
        if (this.state.loading) {
            // return <Spinner />;
        }
        return <Button onPress={this.onSignUpPress.bind(this)} title="Sign Up" />;
    }
    render() {
        return (
            <View>
                <TextInput
                    label='Email Address'
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    keyboardType="email-address"
                    placeholder='you@domain.com'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    style={styles.inputStyle}
                />
                <TextInput
                    label='Password'
                    autoCorrect={false}
                    placeholder='*******'
                    secureTextEntry
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    style={styles.inputStyle}
                />
                  <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                  {this.renderButtonOrSpinner()}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    errorTextStyle: {
        color: '#E64A19',
        alignSelf: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    inputStyle: {
      height: 40,
      backgroundColor: 'rgba(255,255,255,0.4)',
      marginBottom: 10,
      color: '#560675',
      paddingHorizontal: 10
    },
});
