import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  ImageBackground,
  View
} from 'react-native';

import * as firebase from 'firebase';

import { createStackNavigator } from 'react-navigation'; 
import CreateCustomerScreen from '../utils/CreateCustomer'; 

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

class TravelVariables extends React.Component {
  static navigationOptions = {
    headerTitle: 'Travel Details',
  };

  constructor(props) {
    super(props);

    firebase.database().ref('users/' + firebase.auth().currentUser.stsTokenManager.uid).on('value', snapshot => {
      this.setState({customer: snapshot.val()})
    });
  }

  render() {
    return (
      <ImageBackground source={require('../assets/images/waters.jpg')}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.container}
      >
        <View style={styles.container}>
          <View style={{flexDirection:'row'}}>
            <Text>Destination Country</Text>
            <TextInput style={styles.input} onChangeText={(destination) => this.setState({destination})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Departure Date</Text>
            <TextInput style={styles.input} onChangeText={(departDate) => this.setState({departDate})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Return Date</Text>
            <TextInput style={styles.input} onChangeText={(returnDate) => this.setState({returnDate})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Plan Name</Text>
            <TextInput style={styles.input} onChangeText={(planName) => this.setState({planName})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Plan Type</Text>
            <TextInput style={styles.input} onChangeText={(planType) => this.setState({planType})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Trip Cost</Text>
            <TextInput style={styles.input} onChangeText={(tripCost) => this.setState({tripCost})}>
            </TextInput>
          </View>
        </View>
        <Button
          color='black'
          title="Submit Information"
          onPress={() =>
            this.props.navigation.navigate('PricingPlan', {
              customer: this.state.customer,
              plan: {
                destination: this.state.destination,
                departDate: this.state.departDate,
                returnDate: this.state.returnDate,
                planName: this.state.planName,
                planType: this.state.planType,
                tripCost: this.state.tripCost
              }
            })}
        />
      </ImageBackground>
    );
  }
}

class PricingPlan extends React.Component {
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

  render() {
    let premium = "137.50";
    let limitCancel = "Up to 100% of Airline Ticket Cost";
    let limitInterrupt = "Up to 125% of Airline Ticket Cost";
    let limitTicket = "$200";
    let limitMissed = "Minimum of 3 hours Delay  - $500";
    let limitDelay = "Minimum 6 hours delay - $100 per day, Maximum of $500";
    let limitBaggage = "Minimum 12 hours delay - $100";
    let limitLost = "$500 Maximum - Per Item: $250; Combined Maximum Limit Described Property: $250";
    let limitAccident = "$25,000";
    let limitPreExisting = "May be included; restrictions apply";
    return (
        <View style={styles.container}>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.text}>Total Base Premium</Text>
            <Text style={styles.text}> {premium} </Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.text}>Trip Cancellation Coverage</Text>
            <Text style={styles.text}> {limitCancel} </Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.text}>Trip Interruption Coverage</Text>
            <Text style={styles.text}> {limitInterrupt} </Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.text}>Airline Ticket Change Fee Coverage</Text>
            <Text style={styles.text}> {limitTicket} </Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.text}>Missed Connection Coverage</Text>
            <Text style={styles.text}> {limitMissed} </Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.text}>Trip Delay Coverage</Text>
            <Text style={styles.text}> {limitDelay} </Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.text}>Baggage Delay Coverage</Text>
            <Text style={styles.text}> {limitBaggage} </Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.text}>Lost Personal Effects Coverage</Text>
            <Text style={styles.text}> {limitLost} </Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.text}>Accidental Death and Dismemberment(Air Only) Coverage</Text>
            <Text style={styles.text}> {limitAccident} </Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.text}>Pre-Existing Condition Waiver Coverage</Text>
            <Text style={styles.text}> {limitPreExisting} </Text>
          </View>
        <Button
          title="Confirm Plan"
          color='black'
          onPress={() =>
            this.props.navigation.navigate('PaymentConfirmation', {
              customer: this.state.customer,
              plan: this.state.plan
            })}
        />
        </View>
    );
  }
}

class PaymentConfirmation extends React.Component {
  static navigationOptions = {
    headerTitle: 'Payment Confirmation',
  };

  constructor(props) {
    super(props);
    this.state = {
      customer: this.props.navigation.state.params.customer,
      plan: this.props.navigation.state.params.plan
    }
  }

  render() {
    return (
      <ImageBackground source={require('../assets/images/waters.jpg')}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.container}>
        <View style={styles.container}>
          <View style={{flexDirection:'row'}}>
            <Text>Card Number</Text>
            <TextInput style={styles.input} onChangeText={(card) => this.setState({card})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>CVV</Text>
            <TextInput style={styles.input} onChangeText={(cvv) => this.setState({cvv})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Expiry Month</Text>
            <TextInput style={styles.input} onChangeText={(expiryMonth) => this.setState({expiryMonth})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Expiry Year</Text>
            <TextInput style={styles.input} onChangeText={(expiryYear) => this.setState({expiryYear})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Payment Method</Text>
            <TextInput style={styles.input} onChangeText={(payMethod) => this.setState({payMethod})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Card Type</Text>
            <TextInput style={styles.input} onChangeText={(cardType) => this.setState({cardType})}>
            </TextInput>
          </View>
        </View>
        <Button
          title="Make Payment"
          color='black'
          onPress={() =>
            this.props.navigation.navigate('CreateCustomer', {
              createCustomer: '1',
              customer: this.state.customer,
              plan: this.state.plan,
              payment: {
                card: this.state.card,
                cvv: this.state.cvv,
                expiryMonth: this.state.expiryMonth,
                expiryYear: this.state.expiryYear,
                payMethod: this.state.payMethod,
                cardType: this.state.cardType
              }
            })}
        />
      </ImageBackground>
    );
  }
}

const NewScreen = createStackNavigator ({
  TravelVariables: {
    screen: TravelVariables,
  },
  PricingPlan: {
    screen: PricingPlan,
  },
  PaymentConfirmation: {
    screen: PaymentConfirmation,
  },
  CreateCustomer: {
    screen: CreateCustomerScreen,
  },
});

export default NewScreen;

