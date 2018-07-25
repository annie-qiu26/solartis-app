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
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    paddingBottom: 2,
  }
});

export default class LoadingScreen extends React.Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'MainDrawerNavigator' : 'SignInScreen')
    })
  }

  render() {
    const START_TEXT = "Loading...";
    let registered = false; //if registered, remove registration prompt

    return (
      <ImageBackground source={require('../assets/images/hotballoons.jpg')}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.container}
      >
        <View style={styles.container}>
          <Text style={styles.text}>
            {START_TEXT}
          </Text>
        </View>
      </ImageBackground>
    );
  }

}
