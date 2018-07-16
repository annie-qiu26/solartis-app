import React from 'react';
import { Button, Image, Text, Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { createDrawerNavigator } from 'react-navigation'; //side menu navigator


import HomeScreen from 'drawer-screens/homescreen';
import NewScreen from 'drawer-screens/newscreen';
import CurrentScreen from 'drawer-screens/currentscreen';
import HistoryScreen from 'drawer-screens/historyscreen';
import ChatScreen from 'drawer-screens/chatscreen';
import FriendScreen from 'drawer-screens/friendscreen';

class AnnieTestingScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('drawer-screens/images/annie.jpg')}
        style={[styles.tabIcon, {tintColor: tintColor}]}
      />
    ),
  };

  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


const MyApp = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  AnnieTesting: {
    screen: AnnieTestingScreen,
  },
  New: {
    screen: NewScreen,
  },
  Current: {
    screen: CurrentScreen,
  },
  History: {
    screen: HistoryScreen,
  },
  Chat: {
    screen: ChatScreen,
  },
  Friend: {
    screen: FriendScreen,
  },
});
