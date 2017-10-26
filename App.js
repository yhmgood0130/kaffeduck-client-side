import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Actions, Router, Scene } from 'react-native-router-flux';
import AppFooter from './src/components/AppFooter';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';



export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Text>KaffeDuck</Text>
        </Header>
        <AppFooter />
      </Container>
    );
  }
}
