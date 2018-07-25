import React from 'react';
import { StyleSheet, Text,  Button, View, Alert} from 'react-native';

import * as firebase from 'firebase';

import t from 'tcomb-form-native';

const User = t.struct({
  email: t.String,
  password: t.String,
});

const Form = t.form.Form;

const options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    }
}};

export default class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign in'
  };

  constructor(props) {
    super(props);
  }

  handleLogin = () => {
    const value = this._form.getValue();
    firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(() => { }, (error) => { Alert.alert(error.message); });
  }

	render () {
		return (
			<View style={styles.container}>
        <Text style = {styles.title}>
          Solartis Insure
        </Text>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        /> 
        <Button 
          title="Login" 
          color= 'white'
          onPress={this.handleLogin} />
		    <Button
          title="Don't have an account? Sign Up"
          color= 'white'
		      onPress={() => this.props.navigation.navigate('SignUpScreen')}
		    />
		    <Button
          title="Forgot Password?"
          color= 'white'
		      onPress={() => this.props.navigation.navigate('ForgotPasswordScreen')}
		    />
	    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
    backgroundColor: '#5F8FEE'
  },
  title: {
    textShadowOffset: {
      width: 10,
      height: 10
    },
    fontSize: 40,
    color: '#ff0000',
    textShadowColor: 'black',
    marginBottom: 25,
    fontFamily: 'roboto'
  },
  button: {
    color: 'white'
  }
})