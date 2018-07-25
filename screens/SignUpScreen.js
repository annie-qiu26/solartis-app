import React from 'react';
import t from 'tcomb-form-native';
import stylesheet from '../constants/FormsStyle';

import {
  StyleSheet,
  Button,
  View,
  ScrollView,
  Alert,
} from 'react-native';

import * as firebase from 'firebase';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  password: t.String,
  confirmPassword: t.String,
  firstName: t.String,
  lastName: t.String,
  dateOfBirth: t.Date,
  address: t.String,
  city: t.String,
  state: t.String,
  zipCode: t.Number,
  country: t.String,
  phone: t.Number
});

const options = {
  fields: {
    password: {
      password: true,
      secureTextEntry: true
    },
    confirmPassword: {
      password: true,
      secureTextEntry: true
    }
  },
  stylesheet: stylesheet
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 50,
    justifyContent: 'center',
    backgroundColor: '#5F8FEE'
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

export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  writeUserData = (email, firstName, lastName, dateOfBirth, address, city, state, zipcode, country, phone) => {
    firebase.database().ref('users/' + firstName + lastName).set({
      email: email,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      address: address,
      city: city,
      state: state,
      zipcode: zipcode,
      country: country,
      phone: phone
    })
  }

  checkProperties(obj) {
    for (let key in obj) {
        if (obj[key] === null || obj[key] === "")
            return false;
    }
    return true;
  }

  onSignupPress = () => {
    const value = this._form.getValue();

    if (value == null || !this.checkProperties(value)) {
      return;
    }

    if (value.password !== value.confirmPassword) {
      Alert.alert("Passwords do not match");
      return;
    }
    
    firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
      .then(() => { }, (error) => { Alert.alert(error.message); });

    this.writeUserData(value.email, value.firstName, value.lastName, value.dateOfBirth, value.address, value.city, value.state, value.zipCode, value.country, value.phone);
  }

  onBackToLoginPress = () => {
    this.props.navigation.navigate('SignInScreen');
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        /> 

        <Button 
          title="Signup" 
          color= 'white'
          onPress={this.onSignupPress} 
        />
        <Button 
          title="Back to Login" 
          color= 'white'
          onPress={this.onBackToLoginPress} 
        />

        </View>
      </ScrollView>
    );
  }
}