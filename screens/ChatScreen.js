import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

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
  screen: {
    backgroundColor: '#3D6DCC', 
  },
});

export default class ChatScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Chat',
  };

  render() {
    return (
      <View style = {styles.screen}> 
        <ChatBot
          style = {{ backgroundColor: '#EEE', paddingTop: 50}}
          botBubbleColor='#00008b'
          steps={Steps}
        />
      </View>
    );
  }
}
