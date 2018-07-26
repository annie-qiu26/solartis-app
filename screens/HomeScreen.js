import React, { Component } from 'react';
import { StyleSheet, Platform, Image, ImageBackground, Text, View } from 'react-native'
import { createSwitchNavigator } from 'react-navigation'

import LoadingScreen from './LoadingScreen';
import SignInScreen from './SignInScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import SignUpScreen from './SignUpScreen';
import MainDrawerNavigator from '../navigation/MainDrawerNavigator';

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
