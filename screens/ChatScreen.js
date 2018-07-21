import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import SolartisHeader from '../components/SolartisHeader';

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
    paddingTop: 15,
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
      <View style = {styles.screen}> 
        <SolartisHeader title = 'SolarBot'/>
        <ChatBot
          style = {{paddingTop: 20, backgroundColor: '#EEE'}}
          botBubbleColor='#00008b'
          steps={Steps}
        />
      </View>
    );
  }
}
