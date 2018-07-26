import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  ImageBackground,
  View, Alert
} from 'react-native';
import { Button } from 'react-native-elements';
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
  },
  button: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    alignSelf: 'center'
  }
});

class LogOutScreen extends React.Component {

  render() {
    //const resizeMode = 'cover';
    const text1 = "Settings"; 

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
            title="Sign Out"
            titleStyle={{ fontWeight: "50" }}
            buttonStyle={styles.button}
            containerStyle={{ marginTop: 20 }}
            onPress={() => firebase.auth().signOut()}
          />
          <Button
            title="Update Personal Info"
            titleStyle={{ fontWeight: "50" }}
            buttonStyle={styles.button}
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
