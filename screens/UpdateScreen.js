import React from 'react';
import t from 'tcomb-form-native';

import {
  StyleSheet,
  Button,
  View,
  ScrollView,
  Alert
} from 'react-native';

import * as firebase from 'firebase';

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
  zipCode: t.String,
  country: t.String,
  phone: t.String
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
}};

const Form = t.form.Form;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 50,
    justifyContent: 'center',
    backgroundColor: '#5F8FEE'
  },
});


export default class UpdateScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  /*updateUserData = (uid, email, firstName, lastName, dateOfBirth, address, city, state, zipcode, country, phone) => {
    firebase.database().ref('users/' + uid).update({
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
  }*/

  updateUserData = (uid, object) => {
    if (object !== null){
      for (var key in object){
        if (object[key]){
          firebase.database().ref('users/' + uid).update({
            key: object[key],
          })
        }
      }
    }
  }


  onUpdatePress = () => {
    const value = this._form.getValue();
    var user = firebase.auth().currentUser;
    //this.updateUserData(user.uid, value.email, value.firstName, value.lastName, value.dateOfBirth, value.address, value.city, value.state, value.zipCode, value.country, value.phone);
    this.updateUserData(user.uid, value);
    this.props.navigation.navigate('LogOutScreen');
  }

  onBackToSettingsPress = () => {
    this.props.navigation.navigate('LogOutScreen');
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
          title="Update Info" 
          color= 'white'
          onPress={this.onUpdatePress} 
        />
        <Button 
          title="Back to Settings" 
          color= 'white'
          onPress={() => this.onBackToSettingsPress}
        />

        </View>
      </ScrollView>
    );
  }
}