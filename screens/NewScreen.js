import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  ImageBackground,
  View
} from 'react-native';

import { Button } from 'react-native-elements';

import { createStackNavigator } from 'react-navigation'; 
import CreateCustomerScreen from '../utils/CreateCustomer'; 
import TravelVariablesScreen from './TravelVariablesScreen';
import PaymentScreen from './PaymentScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 25,
    paddingTop: 50,
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
  button: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 75
  },
});

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
          title='Next'
          titleStyle={{ fontWeight: "50" }}
          buttonStyle={styles.button}
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

const NewScreen = createStackNavigator (
  {
  	TravelVariables: TravelVariablesScreen,
    PricingPlan: PricingPlan,
    PaymentConfirmation: PaymentScreen,
    CreateCustomer: CreateCustomerScreen
  },
  {
  	initialRouteName: 'TravelVariables',
  }
);

export default NewScreen;

