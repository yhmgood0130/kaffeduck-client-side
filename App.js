import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import Coffee from './components/pages/Coffee';

import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
export default class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Text>KaffeDuck</Text>
        </Header>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="apps" />
            </Button>
            <Button>
              <Icon name="camera" />
            </Button>
            <Button active>
              <Icon active name="navigate" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
        <Content />

      </Container>
    );
  }
}
