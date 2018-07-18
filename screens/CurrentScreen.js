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

export default class CurrentScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Current',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/images/annie.png')}
        style={[styles.tabIcon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
      const text1 = "History Screen is just an extension of Current Screen";
      const text2 = "Filtered by time";
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
              color: 'black',
              paddingBottom: 2,
            }}
          >
            List view
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: 'black',
            }}
          >
            Document Type, Document Name
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: 'black',
            }}
          >
            Document URL
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: 'black',
            }}
          >
            Departure Date
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: 'black',
            }}
          >
            Return Date
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: 'black',
            }}
          >
            Policy Effective Date
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 30,
              color: 'black',
            }}
          >
            Additional Details: Coverage Name, Coverage Limit etc.
          </Text>
        </View>
      </ImageBackground>
    );
  }
}
