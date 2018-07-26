import React from 'react';
import t from 'tcomb-form-native';
import stylesheet from '../constants/FormsStyle';

import {
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';

import { Button } from 'react-native-elements';


const Form = t.form.Form;

const User = t.struct({
  card: t.Number,
  cvv: t.Number,
  expiryMonth: t.Number,
  expiryYear: t.Number, 
  payMethod: t.String,
  cardType: t.String
});

const options = {
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

export default class PaymentScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Plan Options',
      };

    constructor(props) {
        super(props);

        this.state = {
            customer: this.props.navigation.state.params.customer,
            plan: this.props.navigation.state.params.plan
        }
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

        this.props.navigation.navigate('CreateCustomer', {
            customer: this.state.customer,
            plan: this.state.plan,
            payment: {
                card: value.card,
                cvv: value.cvv,
                expiryMonth: value.expiryMonth,
                expiryYear: value.expiryYear,
                payMethod: value.payMethod,
                cardType: value.cardType
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