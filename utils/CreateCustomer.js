import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

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
    this.stateToCodeMap = this.stateToCodeMap.bind(this);
    this.state = {
        customer: this.props.customer ? this.props.customer : this.props.navigation.state.params.customer,
        plan: this.props.plan ? this.props.plan : this.props.navigation.state.params.plan,

        loading: false,
        URI: "https://travelapihk.solartis.net/DroolsV4_2/DroolsService/FireEventV2",
        ACCESS_TOKEN: "Ck3pAnt4t/ag7ULRQNk4zM6Cjh1Q9Bi5nvb2PweE/yGYkWmUDNkW8K3JEFAPDf9F/2saptBtrVKlghUiCoNS4OVZwhGDnmmd44OWJ7/hz1TNZdEPCo6bEThrFT61m3PkaQD6vhwILUp0rzAxLaTUElyTQcn2EKV+V0d0b6JgiULGF7xnRX90u/xaLm1sm9PdFUDuQ0s+Bhhf/75wwH4FrOuWp2zFdIN0FP706fCed0tj20NmTT0HKlNohZSpL3vrMragBxC3NoI4UHK5nj5dDW+AyIKnNiA6u5qE/5xJhyTmRr0p5/gOaDTK9GjCkuy2gDGjmpxiqzrHkDYf0RsLXLDC6FLrJNNbrd8reqwXNAZSCsoZf/nVxWS+OExaBcyU8X3mKd4idEduWZnwFElVCbKXNWKa8S0XRe4LBjip7yHlnwM9PwN/YXU4BhnRfk3ox8LNcYJ9mZxJMxDsxYXUuuz1xauejI059T6q/fFudClOKxtLuwI3Cp8tkkDBqrTsZ4P9E+TTvqAdzNinNdRd+0RF54aMUJ4q6ntJTz/2RqlE/Wjpjregt5akdwkrFr8Vn0A6Sgaku3z3AAowfk+yprPR6tIKsZDH6WGz7/c17vePWli9lYmpOi0Z/KlEnr+gLlC0LkrXsokdRpS9h29o4Qp2BiFZ4O0gxAjWPHSig4Q2wbzq57H22Bw+iCGe6PBywAPoOyVFSUPQlbn3+q3SUeLD7+8Xi7uV0BEe0Grw+shr7fVm7Mdrt80Q3YPRkAiGqVXFTKGXs7tv3ZNzB0xOQXmDs9zLkrtF5FAt/l7TZMP+MYfj7p4N01D9iOYb1pl6dfhf3VPjFE24ddpmQGb9wmpLbu0EyupIOPa16sIOFDmFiiXVxiscyUsrHNLgem5AvGp1mg0Ew/DqnSUHiq9xzAJeSG9l/umzQ6owwwSZ+uPtNrwkbw/gTDkapIA75gMKdUgBLJWcNShyP6jzjg4EDg==",

        CONTENT_TYPE: "application/json",
    }
  }

  componentDidMount() {
    if (this.props.createCustomer) {
        console.log('Customer');
        this.retrieveCustomerData();
    } else {
        console.log('Rate');
        this.retrieveRateData();
    }
  }

  render() {
    let premium;
    if (this.state.dataSource) {
      premium = this.state.dataSource
    } else {
      premium = "0.00"
    }
    return (
        <Text>Thanks for your patience! For your plan, {this.state.plan.planName.value}, you're
        total base premium is: {premium}.</Text>
    );
  }

  stateToCodeMap() {
      let stateCodeMap = {
        alabama: AL,
        alaska: AK,
        arizona: AZ,        
        arkansas: AR,
        california: CA,
        colorado: CO,
        connecticut: CT,
        delaware: DE,
        florida: FL,
        georgia: GA,
        hawaii: HI,
        idaho: ID,   
        illinois: IL,
        indiana: IN,
        iowa: IA,        
        kansas: KS,        
        kentucky: KY,        
        louisiana: LA,        
        maine: ME,        
        maryland: MD,        
        massachusetts: MA,
        michigan: MI,
        minnesota: MN,
        mississippi: MS,
        missouri: MO,        
        montana: MT,        
        nebraska: NE,
        nevada: NV,
        'new hampshire': NH,
        'new jersey': NJ,
        'new mexico': NM,
        'new york': NY,
        'north carolina': NC,
        'north dakota': ND,
        ohio: OH,
        oklahoma: OK,
        oregon: OR,
        pennsylvania: PA,
        'rhode island': RI,
        'south carolina': SC,
        'south dakota':	SD,
        tennessee: TN,
        texas: TX,
        utah: UT,
        vermont: VT,
        virginia: VA,
        washington: WA,
        'west virginia': WV,
        wisconsin: WI,
        wyoming: WY
      };
      return stateCodeMap[this.state.customer.state.lower()];
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
              "TravelerDOB": this.state.customer.dob,
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
        console.log(responseJson);
        this.setState({
          dataSource: JSON.stringify(responseJson.CustomerInformation),
          customerReferenceNumber: responseJson.CustomerInformation.CustomerReferenceNumber
        });
      })
  }

  retrieveRateData() {
    console.log(this.state.customer.dob.value);
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
              "RentalStartDate" : this.state.renterStart ? this.state.renterStart : "",
              "RentalEndDate" : this.state.renterEnd ? this.state.renterEnd : "",
              "RentalLimit" : "35000",
              "NumberOfRentalCars" : this.state.renterCars ? this.state.renterCars : "",
              "TripCancellationCoverage": "With Trip Cancellation",
              "StateCode": "GA",
              "QuoteType": "New Business",
              "EventName": "InvokeRatingV2",
              "TravelerList": [
                {
                  "TravelerDOB": this.state.customer.dob.value,
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
