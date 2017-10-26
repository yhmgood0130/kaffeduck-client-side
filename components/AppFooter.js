import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions } from "react-native-router-flux";

export default class AppFooter extends Component {
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="home" onPress={Actions.home}/>
              <Text>Home</Text>
            </Button>
            <Button>
              <Icon name="egg" onPress={Actions.coffee}/>
              <Text>Coffee</Text>
            </Button>
            <Button active>
              <Icon active name="list-box" onPress={Actions.subscription}/>
              <Text>Subscription</Text>
            </Button>
            <Button>
              <Icon name="person" onPress={Actions.contact}/>
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
