import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  ImageBackground,
  View, Button, Alert
} from 'react-native';
import UpdateScreen from './UpdateScreen';
import {createStackNavigator} from 'react-navigation';
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

class LogOutScreen extends React.Component {

  render() {
    //const resizeMode = 'cover';
    const text1 = "Settings"; //replace annie with name

    handleLogOut = () => {
      firebase.auth().signOut();
    }

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
          <Button
            color='white'
            title="Log Out"
            onPress={() => firebase.auth().signOut()}
          />
          <Button
            color='white'
            title="Update Personal Info"
            onPress={() => this.props.navigation.navigate('UpdateScreen')}
          /> 
        </View>
      </ImageBackground>
    );
  }

}

const SettingsScreen = createStackNavigator ({
  LogOutScreen: {
    screen: LogOutScreen,
  },
  UpdateScreen: {
    screen: UpdateScreen,
  },
});

export default SettingsScreen;
