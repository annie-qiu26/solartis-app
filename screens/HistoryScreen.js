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


export default class HistoryScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'History',
  };

  render() {
      const text1 = "History Screen is just an extension of Current Screen";
      const text2 = "Filtered by time";
    return (
      <ImageBackground source={require('../assets/images/waters.jpg')}
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
              color: 'black',
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
