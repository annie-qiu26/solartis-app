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
    justifyContent: 'center',
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

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./images/annie.jpg')}
        style={[styles.tabIcon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Hi Annie from the home screen</Text>
      </View>
    );
  }
}

export default HomeScreen
