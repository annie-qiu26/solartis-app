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

export default class TestScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Testing',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/images/annie.jpg')}
        style={[styles.tabIcon, {tintColor: tintColor}]}
      />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      URI: "https://travelapihk.solartis.net/DroolsV4_2/DroolsService/FireEventV2",
      ACCESS_TOKEN: "TAVADK1UCvGyZnfWaDwFSkYlrT4lj6Cdrm7YNS9Z6KwsJCzTUOw0SR87A2FJ6u8sx4hdOLVm2xXmFp+ZDyFl"
      + "2DGcej4rJC3jmWzAIZrMaQk4YZqoXuLBwRFSLeXZiEjtQaA945Dmjz7EBSEkuZ4TO3p2XCy8ZJL0pHj3CFhSQdC0fWl+Z1OlpMrowd12"
      + "KqdX3iGLy/Be2s2FD4E9zVly2H/U9C/YM2Jc5gjdEDBnIeRn2yR82ynSmDL6WZlIPPjkXmihNHiVQrBNK3LiZ9Q12/5+875Y1uxSVH1jmre"
      + "6NEFAGo70XRkj/SlB1dHJ0HFkDaxf0cS4gAD+BaHIFc7SQDlfNdgeSZYatD2fKGkUcQSYTz5hvgVGIkUdR9TuYtQCzgge/53el0LBFQPkag6"
      + "NQReu3kvvqlEPL8bJOrtGANQ/O9yRQM32FNk54HhTdNDdnwr5K347R8MuVyzO84TII8pfPS+mdH9qR5q0sh2WODghLzPLOaRW7+Uh4CoGxgX7DCJ"
      + "sVAV9RczZwD6h3mASvlpvPfSm38iqHQfFko2dR+OXNQLgMxOKxL60ou9fJ5wrMgFlAHv/Q8Of1y2YnAuz8++CUgbUiVbPVs15cWkF132rDdl"
      + "oP0FlnkMK+WA8Xe/7omhva2QqIGua/GTpIJb9mRWlbJCSLph0HIOZ0eTAyNS/EKMBWXm1oCQZSf5gqLT2WPLDMMda1n6EGGeuFc4LdMRMHHEFx"
      + "ZmSeFV/7sQVVbuXHFke4F/Rursmlwc2X0xsnt0hhN0Pwo95Mo3VX33HMrEHLNPmiU9vPjssEpXRFY8rYN+xU11lOW0EB2dM4+RaN3yBWat/frr"
      + "63KFApsOwdpEFLcxssYRXbtJd+gerS0bO2CjUEzNIixAoDGYD58UdmLN9/6v0rcEisuJB9nN+5ZI6TTKxsKxlPFwD2mtxFx7khWEmryuyMT7xoGX"
      + "18+AF+SDKuexmtMdjv5L8tmhRwJof+sXukNl+YwOXgLyuTyN+gP789Kl7zXPBsu+fsJdIGY1AOhPEFlT9VM02/DPDMqm3uVCQfKrakT6MXDedCZKg"
      + "Kzc1a908hiBhXL4U6BVY",

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
          "Token": "iMgdpnp436QjuYQ2tn9HU+SgJDsyFW8kDSoLHGwadQKpl/wr4yKoVdsfdsMjkSfJB/FKqjFqrLmebBUqmHM/dVAMv+DDPaXOt/GY7mjWZXGT2z0ArRvyiojuQz8LrhVYihPok4SNftJWQa7rNrqjh5PWJcVbnbLVHo4e9WNp/4X9Sai/5LrKZ1J99H71yIi/9rXsAKhCk5lGzFaO3SXLwJluxpsUM+5MiljDi4NFM+/K0KPeUOuL8R2FZD9RobXBVvR7xPdH1oZ71jBgOmg59/75ugVgJ/35PRXWc1Emi9SPqQHHEmsD4AoH2xj45UGMY3hjx0sz/uABSHKxNwA8DwPTBS7jaN2XqKLCayPsSWHVH04XW+ZeDaw1iRLb/0euQfXT97fiPQgPQSjtDvxif6cFXZQX/BHYIcAUjZtdcuv098quieEPaIWri6DUFEIzf/uRM7R4itGHIU7/B0cMwwQNFhxjtMVAgSBq7Kw4a8kf5s+2XOip5XV3KeT5U4u8HX6/xdKxhpP8gLng6PoGj0MEnSugWYicqO81QJH2UISAaI3iDgNxzCSFmsAChwURz5g/RRmHqLknkxHh4lvFfjQGlTIfdNwW+CwHbg0EQFt/c/4M6CofYIAQVzElcVRih/j88U7EqGr8v1mrTPel1sBXl+auuXSlODNRoeDVogcqA1Fr9504oM1kbCEmrVIqjUxUmK9a8CWsZEjIYiNuY0KncVKuuXSlODNRoeDVogcqA1Foa9LkTsAlC3ItSy+gbt0NdLaJdXbWS8ClBkbddTRCbeWRNMZNDq/vS1JTb8FKCl5OsniK5MZQnMbZdqNHlqbv2WOw2j+jUU0BThnDgEX6XEjSt7SoS1Xd6+F4DyPRZsQbD7XGhOWwTgbKALHDL6LviA3K4dHjVKHv1xOd8L284LsWKpOWqHf8xYqRIiCHZgQEtSRZCdfQPbklkXKGNaTjD",
          "UserName": "travelagent",
          "LanguageCode": "en"
        },
        "CustomerInformation": {
          "ProductVerID": "706",
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
        } // Shoud move to a parameter
      })
    }).then((response) => {
        console.log(response);
        response.json()
      })
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          dataSource: responseJson
        });
      })
  }
}
