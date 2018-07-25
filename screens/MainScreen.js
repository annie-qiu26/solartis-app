import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  ImageBackground,
  View
} from 'react-native';
import { Button } from 'react-native-elements';

import * as firebase from 'firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTop: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    padding: 20,
  },
  containerBottom: {
    position: 'absolute',
    bottom: 125,
    alignItems: 'center',
    alignSelf: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    color: 'black',
    paddingBottom: 2,
    fontFamily: 'roboto'
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  tabIcon: {
    width: 16,
    height: 16,
  },
  button: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    alignSelf: 'center'
  },
  swipe: {
    textAlign: 'center',
    fontSize: 25,
    color: 'white',
    marginTop: 25,
    fontFamily: 'roboto',
    alignSelf: 'center'
  }
});

export default class MainScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Main',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/images/annie.png')}
        style={[styles.tabIcon, {tintColor: tintColor}]}
      />
    ),
  };

  state = { currentUser: null}

  onSignOut() {
    firebase.auth().signOut();
  }

  render() {
    const text1 = "Welcome to Solartis!";
    const text2 = "Swipe Right to Start";

    return (
      <ImageBackground source={require('../assets/images/hotballoons.jpg')}
        resizeMode = 'stretch'
        style={styles.container}
      >
        <View style={styles.containerTop}
           numberOfLines={2}>
          <Text style={styles.title}>
            {text1}
          </Text>
        </View>
        <View style = {styles.containerBottom}>
          <Button
            title="Sign Out"
            titleStyle={{ fontWeight: "50" }}
            buttonStyle={styles.button}
            containerStyle={{ marginTop: 20 }}
          />
          <Text style={styles.swipe}>
            {text2}
          </Text>
        </View>
      </ImageBackground>
    );
  }

}