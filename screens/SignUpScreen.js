import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  ImageBackground,
  View
} from 'react-native';

import { createStackNavigator } from 'react-navigation'; 
import CreateCustomerScreen from '../utils/CreateCustomer'; 
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

class SignUpScreen extends React.Component {
  state = { email: '', password: '', errorMessage: null }

  handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <ImageBackground source={require('../assets/images/waters.jpg')}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.container}
      >
        <View style={styles.container}>
          <View style={{flexDirection:'row'}}>
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
          <View style={{flexDirection:'row'}}>
            <Text>Email</Text>
            <TextInput style={styles.input} onChangeText={(email) => this.setState({email})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>New Password</Text>
            <TextInput style={styles.input} onChangeText={(password) => this.setState({password})}>
            </TextInput>
          </View>
          <Button
          color='black'
          title="Submit Information"
          onPress={() =>
            this.props.navigation.navigate(
              'TravelVariables', 
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
              })}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default SignUpScreen