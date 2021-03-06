import React from 'react';
import { StyleSheet, Text, Image, View, Button } from 'react-native';
import * as firebase from 'firebase';

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    color: '#000000',
    marginTop: 25,
    fontFamily: 'roboto',
    padding: 25
  },
});

export default class CreateCustomerScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Success',
  };

  constructor(props) {
    super(props);
    this.stateToCodeMap = this.stateToCodeMap.bind(this);
    this.state = {
        createCustomer: this.props.navigation ? '1' : {},
        customer: this.props.navigation ? this.props.navigation.state.params.customer : this.props.customer,
        plan: this.props.navigation ? this.props.navigation.state.params.plan : this.props.plan,
        payment: this.props.navigation ? this.props.navigation.state.params.payment : {},

        loading: false,
        URI: "https://travelapihk.solartis.net/DroolsV4_2/DroolsService/FireEventV2",
        ACCESS_TOKEN: "Ck3pAnt4t/ag7ULRQNk4zM6Cjh1Q9Bi5nvb2PweE/yGYkWmUDNkW8K3JEFAPDf9F/2saptBtrVKlghUiCoNS4OVZwhGDnmmd44OWJ7/hz1TNZdEPCo6bEThrFT61m3PkaQD6vhwILUp0rzAxLaTUElyTQcn2EKV+V0d0b6JgiULGF7xnRX90u/xaLm1sm9PdFUDuQ0s+Bhhf/75wwH4FrOuWp2zFdIN0FP706fCed0tj20NmTT0HKlNohZSpL3vrMragBxC3NoI4UHK5nj5dDW+AyIKnNiA6u5qE/5xJhyTmRr0p5/gOaDTK9GjCkuy2gDGjmpxiqzrHkDYf0RsLXLDC6FLrJNNbrd8reqwXNAZSCsoZf/nVxWS+OExaBcyU8X3mKd4idEduWZnwFElVCbKXNWKa8S0XRe4LBjip7yHlnwM9PwN/YXU4BhnRfk3ox8LNcYJ9mZxJMxDsxYXUuuz1xauejI059T6q/fFudClOKxtLuwI3Cp8tkkDBqrTsZ4P9E+TTvqAdzNinNdRd+0RF54aMUJ4q6ntJTz/2RqlE/Wjpjregt5akdwkrFr8Vn0A6Sgaku3z3AAowfk+yprPR6tIKsZDH6WGz7/c17vePWli9lYmpOi0Z/KlEnr+gLlC0LkrXsokdRpS9h29o4Qp2BiFZ4O0gxAjWPHSig4Q2wbzq57H22Bw+iCGe6PBywAPoOyVFSUPQlbn3+q3SUeLD7+8Xi7uV0BEe0Grw+shr7fVm7Mdrt80Q3YPRkAiGqVXFTKGXs7tv3ZNzB0xOQXmDs9zLkrtF5FAt/l7TZMP+MYfj7p4N01D9iOYb1pl6dfhf3VPjFE24ddpmQGb9wmpLbu0EyupIOPa16sIOFDmFiiXVxiscyUsrHNLgem5AvGp1mg0Ew/DqnSUHiq9xzAJeSG9l/umzQ6owwwSZ+uPtNrwkbw/gTDkapIA75gMKdUgBLJWcNShyP6jzjg4EDg==",

        CONTENT_TYPE: "application/json",
    }
  }

  componentDidMount() {
    if (this.state.createCustomer == '1') {
        console.log('Customer');
        this.retrieveCustomerData();
    } else {
        console.log('Rate');
        this.retrieveRateData();
    }
  }

  render() {
    return (
      this.displayView()
    );
  }

  writeUserData = (destination, referenceNumber, policyEffectiveDate) => {
    statementData = {
      destination: destination,
      referenceNumber: referenceNumber,
      policyEffectiveDate: policyEffectiveDate
    }
    
    statementKey = firebase.database().ref().child('statements').push().key;
    updates = {};
    updates['/statements/' + statementKey] = statementData;
    updates['users/' + firebase.auth().currentUser.uid + '/statements/' + statementKey] = statementData;

    return firebase.database().ref().update(updates);
  }

  displayView() {
    let premium;
    if (this.state.dataSource) {
      premium = this.state.dataSource
    } else {
      premium = "0.00"
    }
    if (this.state.createCustomer == '1') {
      return (
        <View> 
          <Text style = {styles.title} numberOfLines={10}>Thanks for your payment! We've successfully processed your order. Check out 
            your plans in history</Text>
          <Button
            title='History Screen'
            onPress={()=>this.props.navigation.navigate('History')}
          />
        </View>
      );
    } else {
      return (<Text>Thanks for your patience! For your plan, {this.planNameMap()}, your
        total base premium is: {premium}.</Text>);
    }
  }

  planNameMap() {
    let planMap = {
       air_ticket: 'Air Ticket Protector',
       classic_plus: 'Classic Plus',
       premier: 'Premier',
       premier_annual: 'Premier Annual',
       basic_annual: 'Basic Annual',
       medical_only: 'Medical Only Annual',
       renters_collision: 'Renter\'s Collision'
    }
    
    return planMap[this.state.plan.planName.value];

  }


  stateToCodeMap() {
      let stateCodeMap = {
        alabama: 'AL',
        alaska: 'AK',
        arizona: 'AZ',        
        arkansas: 'AR',
        california: 'CA',
        colorado: 'CO',
        connecticut: 'CT',
        delaware: 'DE',
        florida: 'FL',
        georgia: 'GA',
        hawaii: 'HI',
        idaho: 'ID',   
        illinois: 'IL',
        indiana: 'IN',
        iowa: 'IA',        
        kansas: 'KS',        
        kentucky: 'KY',        
        louisiana: 'LA',        
        maine: 'ME',        
        maryland: 'MD',        
        massachusetts: 'MA',
        michigan: 'MI',
        minnesota: 'MN',
        mississippi: 'MS',
        missouri: 'MO',        
        montana: 'MT',        
        nebraska: 'NE',
        nevada: 'NV',
        'new hampshire': 'NH',
        'new jersey': 'NJ',
        'new mexico': 'NM',
        'new york': 'NY',
        'north carolina': 'NC',
        'north dakota': 'ND',
        ohio: 'OH',
        oklahoma: 'OK',
        oregon: 'OR',
        pennsylvania: 'PA',
        'rhode island': 'RI',
        'south carolina': 'SC',
        'south dakota':	'SD',
        tennessee: 'TN',
        texas: 'TX',
        utah: 'UT',
        vermont: 'VT',
        virginia: 'VA',
        washington: 'WA',
        'west virginia': 'WV',
        wisconsin: 'WI',
        wyoming: 'WY'
      };
      
      if (this.state.customer.state.toLowerCase() in stateCodeMap) {
        return stateCodeMap[this.state.customer.state.toLowerCase()];
      } else {
        return this.state.customer.state;
      }
  }

  retrieveCustomerData() {
    fetch(this.state.URI, {
      method: 'POST',
      headers: {
        Token: this.state.ACCESS_TOKEN,
        'Content-Type': this.state.CONTENT_TYPE,
        EventName: "CreateCustomer",
      },
      body: JSON.stringify({
        "ServiceRequestDetail": {
          "ServiceRequestVersion": "1.0",
          "ServiceResponseVersion": "1.0",
          "OwnerId": "15",
          "ResponseType": "JSON",
          "RegionCode": "US",
          "Token": this.state.ACCESS_TOKEN,
          "UserName": "travelagent",
          "LanguageCode": "en"
        },
        "CustomerInformation": {
          "ProductVerID": "707",
          "ProductID": "619",
          "ProductNumber": "ILT",
          "ProductVerNumber": "1.0",
          "ProducerCode": "86201",
          "OwnerId": "15",
          "PlanName": this.state.plan.planName,
          "PlanCode": "1",
          "PlanType": this.state.plan.planType,
          "DepartureDate": this.state.plan.departDate,
          "ReturnDate": this.state.plan.returnDate,
          "DepositDate": "05/31/2017",
          "DestinationCountry": this.state.plan.destination,
          "PolicyEffectiveDate": "11/01/2020",
          "StateCode": "GA",
          "StateName": "Georgia",
          "QuoteType": "New Business",
          "EventName": "CreateCustomer",
          "TravelerList": [
            {
              "TravelerDOB": this.state.customer.dateOfBirth,
              "TravelCost": this.state.plan.tripCost,
              "FirstName": this.state.customer.firstName,
              "LastName": this.state.customer.lastName,
              "AddressLine1": this.state.customer.address,
              "City": this.state.customer.city,
              "State": this.state.customer.state,
              "StateCode": this.stateToCodeMap(),
              "Country": this.state.customer.country,
              "Zipcode": this.state.customer.zipCode,
              "Phone": this.state.customer.phone,
              "Email": this.state.customer.email,
              "TravelerIndex": "1"
            }
          ]
        }
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          dataSource: JSON.stringify(responseJson.CustomerInformation),
          customerReferenceNumber: responseJson.CustomerInformation.CustomerReferenceNumber
        });
        this.payInsurance();
      })
  }

  payInsurance() {
    fetch(this.state.URI, {
      method: 'POST',
      headers: {
        Token: this.state.ACCESS_TOKEN,
        'Content-Type': this.state.CONTENT_TYPE,
        EventName: "Pay_Issue",
      },
      body: JSON.stringify({
        "ServiceRequestDetail": {
          "ServiceRequestVersion": "1.0",
          "ServiceResponseVersion": "1.0",
          "OwnerId": "15",
          "ResponseType": "JSON",
          "RegionCode": "US",
          "Token": this.state.ACCESS_TOKEN,
          "UserName": "travelagent",
          "LanguageCode": "en"
        },
        "PolicyInformation": {
          "ProductVerID": "706",
          "ProductID": "619",
          "ProductNumber": "ILT",
          "ProductVerNumber": "1.0",
          "ProducerCode": "86201",
          "OwnerId": "15",
          "CustomerNumber": this.state.customerReferenceNumber,
          "RoleID": "5",
          "RoleName": "Agent",
          "RoleType": "User",
          "EventName": "Pay_Issue",
          "CardNumber": this.state.payment.card,
          "CVV": this.state.payment.cvv,
          "ExpiryMonth": this.state.payment.expiryMonth,
          "ExpiryYear": this.state.payment.expiryYear,
          "PayerName": this.state.customer.firstName + this.state.customer.lastName,
          "PayerAddress1": this.state.customer.address,
          "PayerCity": this.state.customer.city,
          "PayerState": this.stateToCodeMap(),
          "PayerCountry": "US",
          "PayerZipcode": this.state.customer.zipCode,
          "PayerEmail": this.state.customer.email,
          "PayerPhone": this.state.customer.phone,
          "PaymentMethod": this.state.payment.payMethod,
          "CardType": this.state.payment.cardType
        }
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.writeUserData(this.state.plan.destination, responseJson.CustomerReferenceNumber,
        responseJson.PolicyBatch.PolicyEffectiveDate);
    })
  }

  retrieveRateData() {
    fetch(this.state.URI, {
        method: 'POST',
        headers: {
          Token: this.state.ACCESS_TOKEN,
          'Content-Type': this.state.CONTENT_TYPE,
          EventName: "InvokeRatingV2",
        },
        body: JSON.stringify({
            "ServiceRequestDetail": {
              "ServiceRequestVersion": "1.0",
              "ServiceResponseVersion": "1.0",
              "OwnerId": "15",
              "ResponseType": "JSON",
              "RegionCode": "US",
              "Token": this.state.ACCESS_TOKEN,
              "UserName": "travelagent",
              "LanguageCode": "en"
            },
            "QuoteInformation": {
              "ProductID": "619",
              "ProductVerID": "706",
              "ProductNumber": "ILT",
              "ProductVerNumber": "1.0",
              "ProducerCode": "86201",
              "OwnerId": "15",
              "PlanName": this.state.plan.planName ? this.state.plan.planName.value : "",
              "PlanCode": "1",
              "DepartureDate": this.state.plan.departDate ? this.state.plan.departDate.value : "",  
              "ReturnDate": this.state.plan.returnDate ? this.state.plan.returnDate.value : "",
              "DepositDate": this.state.plan.depositDate ? this.state.plan.depositDate.value : "",
              "DestinationCountry": this.state.plan.destination ? this.state.plan.destination.value : "",
              "PolicyEffectiveDate": this.state.plan.effectiveDate ? this.state.plan.effectiveDate.value : "",
              "RentalStartDate" : this.state.plan.renterStart ? this.state.plan.renterStart : "",
              "RentalEndDate" : this.state.plan.renterEnd ? this.state.plan.renterEnd : "",
              "RentalLimit" : "35000",
              "NumberOfRentalCars" : this.state.plan.renterCars ? this.state.plan.renterCars : "",
              "TripCancellationCoverage": "With Trip Cancellation",
              "StateCode": "GA",
              "QuoteType": "New Business",
              "EventName": "InvokeRatingV2",
              "TravelerList": [
                {
                  "TravelerDOB": this.state.customer.dateOfBirth,
                  "TravelCost": this.state.plan.tripCost ? this.state.plan.tripCost.value : ""
                }
              ]
            }
          })
      }).then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.setState({
            dataSource: responseJson.PremiumInformation.TotalBasePremium,
          });
        })
  }
}
