import React from 'react';
import t from 'tcomb-form-native';
import stylesheet from '../constants/FormsStyle';
import moment from 'moment';

import {
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';

import * as firebase from 'firebase';
import { Button } from 'react-native-elements';


const Form = t.form.Form;

const User = t.struct({
  destination: t.String,
  tripCost: t.Number,
  departDate: t.Date,
  returnDate: t.Date,
  planName: t.String,
  planType: t.String,
});

let myFormatFunction = (format,date) =>{
  return moment(date).format(format);
}

let departDate = {
  label: 'Depart date',
  mode:'date',
  config:{
      format: (date) => myFormatFunction("MM-DD-YYYY", date)
  }
};

let returnDate = {
  label: 'Return date',
  mode:'date',
  config:{
      format: (date) => myFormatFunction("MM-DD-YYYY", date)
  }
};

const options = {
  fields: {
    departDate: departDate,
    returnDate: returnDate
  },
  stylesheet: stylesheet
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 200,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 75
  },
});

export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {}
    }

    firebase.database().ref('users/' + firebase.auth().currentUser.uid).on('value', snapshot => {
      this.setState({customer: snapshot.val()});
    });
  }

  checkProperties(obj) {
    for (let key in obj) {
        if (obj[key] === null || obj[key] === "")
            return false;
    }
    return true;
  }

  onSubmit = () => {
    const value = this._form.getValue();

    if (value == null || !this.checkProperties(value)) {
      return;
    }

    this.props.navigation.navigate('PricingPlan', {
      customer: this.state.customer,
      plan: {
        destination: value.destination,
        departDate: value.departDate,
        returnDate: value.returnDate,
        planName: value.planName,
        planType: value.planType,
        tripCost: value.tripCost
      }
    })
  }

  render() {
    return (
      <ImageBackground source={require('../assets/images/waters.jpg')}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.container}
      >
        <View style={styles.container}>
        <Form 
          ref={c => this._form = c}
          type={User} 
          options={options}
        /> 

        <Button
          title="Submit Information"
          titleStyle={{ fontWeight: "50" }}
          buttonStyle={styles.button}
          containerStyle={{ marginTop: 20 }}
          onPress={this.onSubmit}
        />

        </View>
      </ImageBackground>
    );
  }
}