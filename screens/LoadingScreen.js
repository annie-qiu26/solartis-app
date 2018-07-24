import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  ImageBackground,
  View
} from 'react-native';

import * as firebase from 'firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
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
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  }
});

export default class LoadingScreen extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'MainScreen' : 'SignInScreen')
    })
  }

  render() {
    //const resizeMode = 'cover';
    const text1 = "Welcome Annie!"; //replace annie with name
    const text2 = "Loading...";
    let registered = false; //if registered, remove registration prompt

    return (
      <ImageBackground source={require('../assets/images/hotballoons.jpg')}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.container}
      >
        <View style={styles.container}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
              color: 'black',
              paddingBottom: 2,
            }}
          >
            {text1}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: 'white',
              paddingBottom: 2,
            }}
          >
            {text2}
          </Text>
        </View>
      </ImageBackground>
    );
  }

}
