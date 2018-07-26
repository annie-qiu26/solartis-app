import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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

export default class FriendScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Friend',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30}}>I will work on this if we manage to get our backend this far this week!</Text>
        <Text style={{fontSize:30}}>Feature 1: Input friend email to share or recommend insurance plan (chosen from your current plans or last viewed plan)</Text>
        <Text style={{fontSize:30}}>Feature 2: Share your travel stories and pictures (networking element)</Text>
      </View>
    );
  }
}
