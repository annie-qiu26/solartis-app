import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
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

export default class NewScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'New',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/images/annie.png')}
        style={[styles.tabIcon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    const text1 = "page 1: init new customer if not init";
    const text2 = "page 2: enter variables input";
    const text3 = "page 3: pricing info and plan details";
    return (
      <ImageBackground source={require('../assets/images/palmtrees.jpg')}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.container}
      >
        <View style={styles.container}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
              color: 'white',
              paddingBottom: 2,
            }}
          >
            Stack Navigation within this page
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
              color: 'white',
              paddingBottom: 2,
            }}
          >
            {text1}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
              color: 'white',
              paddingBottom: 2,
            }}
          >
            {text2}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
              color: 'white',
              paddingBottom: 2,
            }}
          >
            {text3}
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

