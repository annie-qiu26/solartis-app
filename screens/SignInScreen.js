import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Button, Image, ImageBackground,View} from 'react-native';
import CreateCustomerScreen from '../utils/CreateCustomer'; 

import SignUpScreen from './SignUpScreen.js';
import ChatScreen from './ChatScreen.js';

import * as firebase from 'firebase';

export default class SignInScreen extends React.Component {
	state = { email: '', password: '', errorMessage: null}

	handleLogin = () => {
    	const { email, pasword } = this.state
    	firebase
      	.auth()
      	.signInWithEmailAndPassword(email, password)
      	.then(() => this.props.navigation.navigate('Main'))
      	.catch(error => this.setState({ errorMessage: error.message }))
  }

	render () {
		return (
			<View style={styles.container}>
		        <Text>Login</Text>
		        {this.state.errorMessage &&
		          <Text style={{ color: 'red' }}>
		            {this.state.errorMessage}
		          </Text>}
		        <TextInput
		          style={styles.textInput}
		          autoCapitalize="none"
		          placeholder="Email"
		          onChangeText={email => this.setState({ email })}
		          value={this.state.email}
		        />
		        <TextInput
		          secureTextEntry
		          style={styles.textInput}
		          autoCapitalize="none"
		          placeholder="Password"
		          onChangeText={password => this.setState({ password })}
		          value={this.state.password}
		        />
		        <Button title="Login" onPress={this.handleLogin} />
		        <Button
		          title="Don't have an account? Sign Up"
		          onPress={() => this.props.navigation.navigate('SignUpScreen')}
		        />
		        <Button
		          title="Sign up with Chat Bot"
		          onPress={() => this.props.navigation.navigate('ChatScreen')}
		        />
	      	</View>
    	)
  	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})