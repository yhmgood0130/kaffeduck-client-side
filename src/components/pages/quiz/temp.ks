import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base'
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

class Quiz extends Component {
  static propTypes = {
    routes: PropTypes.object,
  };
  render () {
    const {routes} = this.context;
    //const goToPageTwo = () => Actions.pageTwo({text: 'Helo world'});
    return (
      <View style={styles.outerContainer}>
        <Text>
          The current scene is titled {this.props.routes.scene.title}.
        </Text>
        <Text onPress={Actions.rootTabBar}>This is PageOne!</Text>
        <Text onPress={Actions.quiz}>Time to take a quiz!</Text>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1
  }
})

export default connect(({routes}) => ({routes}))(Quiz);
