import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  ImageBackground,
  View
} from 'react-native';

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

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/images/annie.png')}
        style={[styles.tabIcon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    //const resizeMode = 'cover';
    const text1 = "Welcome Annie!"; //replace annie with name
    const text2 = "Swipe right to start planning your adventures";
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
            <View> 
              <TextInput
                style={{height: 40, borderColor: 'gray', backgroundColor:'white', borderWidth: 1, width:160}}
                onChangeText={(text) => this.setState({text})}
                value='Registration Email'
              />
              <TextInput
                style={{height: 40, borderColor: 'gray', backgroundColor:'white', borderWidth: 1, width:160}}
                onChangeText={(text) => this.setState({text})}
                value='Password'
              />
            </View>
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
