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

class CustomerInfo extends React.Component {
  static navigationOptions = {
    headerTitle: 'Customer Information',
  };

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
            <Text>State Code</Text>
            <TextInput style={styles.input} onChangeText={(stateCode) => this.setState({stateCode})}>
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
          <Button
          color='black'
          title="Submit Information"
          onPress={() =>
            this.props.navigation.navigate('TravelVariables')}
          />
        </View>
      </ImageBackground>
    );
  }
}

class TravelVariables extends React.Component {
  static navigationOptions = {
    headerTitle: 'Travel Details',
  };

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
            <TextInput style={styles.input} onChangeText={(depart) => this.setState({depart})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Return Date</Text>
            <TextInput style={styles.input} onChangeText={(returnd) => this.setState({returnd})}>
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
          <View style={{flexDirection:'row'}}>
            <Text>Deposit Date</Text>
            <TextInput style={styles.input} onChangeText={(deposit) => this.setState({deposit})}>
            </TextInput>
          </View>
        </View>
        <Button
          color='black'
          title="Submit Information"
          onPress={() =>
            this.props.navigation.navigate('PricingPlan')}
        />
      </ImageBackground>
    );
  }
}

class PricingPlan extends React.Component {
  static navigationOptions = {
    headerTitle: 'Plan Options',
  };

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
            this.props.navigation.navigate('PaymentConfirmation')}
        />
        </View>
    );
  }
}

class PaymentConfirmation extends React.Component {
  static navigationOptions = {
    headerTitle: 'Payment Confirmation',
  };

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
            <TextInput style={styles.input} onChangeText={(expirym) => this.setState({expirym})}>
            </TextInput>
          </View>
          <View style={{flexDirection:'row'}}>
            <Text>Expiry Year</Text>
            <TextInput style={styles.input} onChangeText={(expiryy) => this.setState({expiryy})}>
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
            this.props.navigation.navigate('Success')}
        />
      </ImageBackground>
    );
  }
}

class Success extends React.Component {
  static navigationOptions = {
    headerTitle: 'Payment Successful',
  };

  render() {
    return (
      <ImageBackground source={require('../assets/images/waters.jpg')}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.container}>
        <View style={styles.container}>
          <Text style={{fontSize:80}}>Thank you</Text>
        </View>
      </ImageBackground>
    );
  }
}

const NewScreen = createStackNavigator ({
  CustomerInfo: {
    screen: CustomerInfo,
  },
  TravelVariables: {
    screen: TravelVariables,
  },
  PricingPlan: {
    screen: PricingPlan,
  },
  PaymentConfirmation: {
    screen: PaymentConfirmation,
  },
  Success: {
    screen: Success,
  },
});

export default NewScreen;

