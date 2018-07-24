import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Button, Image, ImageBackground,View} from 'react-native';
import CreateCustomerScreen from '../utils/CreateCustomer'; 

import SignUpScreen from './SignUpScreen.js';
import ChatScreen from './ChatScreen.js';

import * as firebase from 'firebase';

export default class SignInScreen extends React.Component {
	constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: "",
        };
    }

    handleLogin = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => { }, (error) => { Alert.alert(error.message); });
    }

	render () {
		return (
			<View style={{paddingTop:50, alignItems:"center"}}>

                <Text>Login</Text> 

                <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({email: text}) }}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <View style={{paddingTop:10}} />

                <TextInput style={{width: 200, height: 40, borderWidth: 1}}
                    value={this.state.password}
                    onChangeText={(text) => { this.setState({password: text}) }}
                    placeholder="Password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
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