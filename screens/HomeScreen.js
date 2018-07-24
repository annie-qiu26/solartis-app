import React, { Component } from 'react';
import { StyleSheet, Platform, Image, ImageBackground, Text, View } from 'react-native'
import { createSwitchNavigator } from 'react-navigation'

import LoadingScreen from './LoadingScreen';
import SignInScreen from './SignInScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import SignUpScreen from './SignUpScreen';
import MainDrawerNavigator from '../navigation/MainDrawerNavigator';

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

const HomeScreen = createSwitchNavigator (
  {
    LoadingScreen,
    SignUpScreen,
    SignInScreen,
    ForgotPasswordScreen,
    MainDrawerNavigator
  },
  {
    initialRouteName: 'LoadingScreen'
  }
);

export default HomeScreen;
