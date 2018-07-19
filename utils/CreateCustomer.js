import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
});

export default class CreateCustomerScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'Success',
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      URI: "https://travelapihk.solartis.net/DroolsV4_2/DroolsService/FireEventV2",
      ACCESS_TOKEN: "Ck3pAnt4t/ag7ULRQNk4zM6Cjh1Q9Bi5nvb2PweE/yGYkWmUDNkW8K3JEFAPDf9F/2saptBtrVKlghUiCoNS4OVZwhGDnmmd44OWJ7/hz1TNZdEPCo6bEThrFT61m3PkaQD6vhwILUp0rzAxLaTUElyTQcn2EKV+V0d0b6JgiULGF7xnRX90u/xaLm1sm9PdFUDuQ0s+Bhhf/75wwH4FrOuWp2zFdIN0FP706fCed0tj20NmTT0HKlNohZSpL3vrMragBxC3NoI4UHK5nj5dDW+AyIKnNiA6u5qE/5xJhyTmRr0p5/gOaDTK9GjCkuy2gDGjmpxiqzrHkDYf0RsLXLDC6FLrJNNbrd8reqwXNAZSCsoZf/nVxWS+OExaBcyU8X3mKd4idEduWZnwFElVCbKXNWKa8S0XRe4LBjip7yHlnwM9PwN/YXU4BhnRfk3ox8LNcYJ9mZxJMxDsxYXUuuz1xauejI059T6q/fFudClOKxtLuwI3Cp8tkkDBqrTsZ4P9E+TTvqAdzNinNdRd+0RF54aMUJ4q6ntJTz/2RqlE/Wjpjregt5akdwkrFr8Vn0A6Sgaku3z3AAowfk+yprPR6tIKsZDH6WGz7/c17vePWli9lYmpOi0Z/KlEnr+gLlC0LkrXsokdRpS9h29o4Qp2BiFZ4O0gxAjWPHSig4Q2wbzq57H22Bw+iCGe6PBywAPoOyVFSUPQlbn3+q3SUeLD7+8Xi7uV0BEe0Grw+shr7fVm7Mdrt80Q3YPRkAiGqVXFTKGXs7tv3ZNzB0xOQXmDs9zLkrtF5FAt/l7TZMP+MYfj7p4N01D9iOYb1pl6dfhf3VPjFE24ddpmQGb9wmpLbu0EyupIOPa16sIOFDmFiiXVxiscyUsrHNLgem5AvGp1mg0Ew/DqnSUHiq9xzAJeSG9l/umzQ6owwwSZ+uPtNrwkbw/gTDkapIA75gMKdUgBLJWcNShyP6jzjg4EDg==",

      CONTENT_TYPE: "application/json",
      EVENT_NAME: "CreateCustomer",
    }
  }

  componentDidMount() {
    this.retrieveData();
  }

  render() {
    return (
      <Text>{this.state.dataSource}</Text>
    );
  }

  retrieveData() {
    fetch(this.state.URI, {
      method: 'POST',
      headers: {
        Token: this.state.ACCESS_TOKEN,
        'Content-Type': this.state.CONTENT_TYPE,
        EventName: this.state.EVENT_NAME,
      },
      body: JSON.stringify({
        "ServiceRequestDetail": {
          "ServiceRequestVersion": "1.0",
          "ServiceResponseVersion": "1.0",
          "OwnerId": "15",
          "ResponseType": "JSON",
          "RegionCode": "US",
          "Token": "Ck3pAnt4t/ag7ULRQNk4zM6Cjh1Q9Bi5nvb2PweE/yGYkWmUDNkW8K3JEFAPDf9F/2saptBtrVKlghUiCoNS4OVZwhGDnmmd44OWJ7/hz1TNZdEPCo6bEThrFT61m3PkaQD6vhwILUp0rzAxLaTUElyTQcn2EKV+V0d0b6JgiULGF7xnRX90u/xaLm1sm9PdFUDuQ0s+Bhhf/75wwH4FrOuWp2zFdIN0FP706fCed0tj20NmTT0HKlNohZSpL3vrMragBxC3NoI4UHK5nj5dDW+AyIKnNiA6u5qE/5xJhyTmRr0p5/gOaDTK9GjCkuy2gDGjmpxiqzrHkDYf0RsLXLDC6FLrJNNbrd8reqwXNAZSCsoZf/nVxWS+OExaBcyU8X3mKd4idEduWZnwFElVCbKXNWKa8S0XRe4LBjip7yHlnwM9PwN/YXU4BhnRfk3ox8LNcYJ9mZxJMxDsxYXUuuz1xauejI059T6q/fFudClOKxtLuwI3Cp8tkkDBqrTsZ4P9E+TTvqAdzNinNdRd+0RF54aMUJ4q6ntJTz/2RqlE/Wjpjregt5akdwkrFr8Vn0A6Sgaku3z3AAowfk+yprPR6tIKsZDH6WGz7/c17vePWli9lYmpOi0Z/KlEnr+gLlC0LkrXsokdRpS9h29o4Qp2BiFZ4O0gxAjWPHSig4Q2wbzq57H22Bw+iCGe6PBywAPoOyVFSUPQlbn3+q3SUeLD7+8Xi7uV0BEe0Grw+shr7fVm7Mdrt80Q3YPRkAiGqVXFTKGXs7tv3ZNzB0xOQXmDs9zLkrtF5FAt/l7TZMP+MYfj7p4N01D9iOYb1pl6dfhf3VPjFE24ddpmQGb9wmpLbu0EyupIOPa16sIOFDmFiiXVxiscyUsrHNLgem5AvGp1mg0Ew/DqnSUHiq9xzAJeSG9l/umzQ6owwwSZ+uPtNrwkbw/gTDkapIA75gMKdUgBLJWcNShyP6jzjg4EDg==",
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
          "PlanName": "Air Ticket Protector",
          "PlanCode": "1",
          "PlanType": "Single Trip",
          "DepartureDate": "11/01/2020",
          "ReturnDate": "11/25/2020",
          "DepositDate": "05/31/2017",
          "DestinationCountry": "France",
          "PolicyEffectiveDate": "11/01/2020",
          "StateCode": "GA",
          "StateName": "Georgia",
          "QuoteType": "New Business",
          "EventName": "CreateCustomer",
          "TravelerList": [
            {
              "TravelerDOB": "02/14/1990",
              "TravelCost": "2500",
              "FirstName": "John",
              "LastName": "Doe",
              "AddressLine1": "399 park avenue",
              "City": "Atlanta",
              "State": "Georgia",
              "StateCode": "GA",
              "Country": "United States",
              "Zipcode": "30301",
              "Phone": "4045555512",
              "Email": "test@solartis.net",
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
      })
  }
}
