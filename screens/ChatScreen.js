import React from 'react';
import { Image, StyleSheet } from 'react-native';

import ChatBot from 'react-native-chatbot';
import Steps from '../constants/Steps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  tabIcon: {
    width: 16,
    height: 16,
  },
});

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Chat',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/images/annie.png')}
        style={[styles.tabIcon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <ChatBot
        steps={Steps.steps}
      />
    );
  }
}
