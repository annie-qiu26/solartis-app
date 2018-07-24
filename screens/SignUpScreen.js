import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  ImageBackground,
  View,
  Alert
} from 'react-native';

import { createStackNavigator } from 'react-navigation'; 
import CreateCustomerScreen from '../utils/CreateCustomer'; 
import SignInScreen from './SignInScreen';
import MainScreen from './MainScreen';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';

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
  text: {
    flex:1,
    flexWrap:'wrap',
  },
  input: {
    height: 40, borderColor: 'gray', backgroundColor:'white', borderWidth: 1, width:160,
  },
});

/* removed this code

this.props.navigation.navigate('SignInScreen', 
              {
                customer: {
                  firstName: this.state.firstName,
                  lastName: this.state.lastName,
                  dob: this.state.dob,
                  address: this.state.address,
                  city: this.state.city,
                  state: this.state.state,
                  zipCode: this.state.zipCode,
                  country: this.state.country,
                  phone: this.state.phone,
                  email: this.state.email
                }
              }
            )
*/

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: "",
      password: "",
      passwordConfirm: "",
    };
  }

  onSignupPress = () => {
    if (this.state.password !== this.state.passwordConfirm) {
      Alert.alert("Passwords do not match");
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => { }, (error) => { Alert.alert(error.message); });
    }

    onBackToLoginPress = () => {
      this.props.navigation.navigate('SignInScreen');
    }

  render() {
    return (
      <ImageBackground source={require('../assets/images/waters.jpg')}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.container}
      >
        <View style={styles.container}>
          <View style={{flexDirection:'row'}}>
            <Text>Signup Email</Text>
            <TextInput style={{width: 200, height: 40, borderWidth: 1}}
              value={this.state.email}
              onChangeText={(text) => { this.setState({email: text}) }}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={{flexDirection:'row', paddingTop:10}}>
            <Text>New Password</Text>
            <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                value={this.state.password}
                onChangeText={(text) => { this.setState({password: text}) }}
                placeholder="Password"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
            />
          </View>

          <View style={{flexDirection:'row', paddingTop:10}}>
            <Text>Confirm Password</Text>
            <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                value={this.state.passwordConfirm}
                onChangeText={(text) => { this.setState({passwordConfirm: text}) }}
                placeholder="Password (confirm)"
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
            />
          </View>

          <Button title="Signup" onPress={this.onSignupPress} />

          <Button title="Back to Login" onPress={this.onBackToLoginPress} />

          <View style={{flexDirection:'row', paddingTop:20}}>
            <Text>First Name</Text>
            <TextInput style={styles.input} onChangeText={(firstName) => this.setState({firstName})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Last Name</Text>
            <TextInput style={styles.input} onChangeText={(lastName) => this.setState({lastName})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Date of Birth</Text>
            <TextInput style={styles.input} onChangeText={(dob) => this.setState({dob})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Address</Text>
            <TextInput style={styles.input} onChangeText={(address) => this.setState({address})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>City</Text>
            <TextInput style={styles.input} onChangeText={(city) => this.setState({city})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>State</Text>
            <TextInput style={styles.input} onChangeText={(state) => this.setState({state})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Zip Code</Text>
            <TextInput style={styles.input} onChangeText={(zipCode) => this.setState({zipCode})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Country</Text>
            <TextInput style={styles.input} onChangeText={(country) => this.setState({country})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Phone</Text>
            <TextInput style={styles.input} onChangeText={(phone) => this.setState({phone})}>
            </TextInput>
          </View>
          <Button
          color='black'
          title="Submit Information"
          onPress={() =>
            this.handleSignUp
          }
          />
        </View>
      </ImageBackground>
    );
  }
}

export default SignUpScreen