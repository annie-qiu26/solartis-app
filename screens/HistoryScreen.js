import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View
} from 'react-native';

import { List, ListItem } from 'react-native-elements';
import { AppLoading } from 'expo';

import * as firebase from 'firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 20,
    marginTop: 30
  },
  text: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 40,
    fontFamily: 'roboto',
    color: 'black',
    marginTop: 100
  }
});


export default class HistoryScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'History',
  };

  constructor(props) {
    super(props);
    this.state = {
      customer: {}
    }
  }

  componentWillMount() {
    firebase.database().ref('users/' + firebase.auth().currentUser.uid).on('value', snapshot => {
      this.setState({customer: snapshot.val()});
      this.addData();
      this.setState({
        promiseIsResolved: true
      })
    })
  }
  

  addData = () => {
    statements = this.state.customer.statements;
    data = [];

    for (let key in statements) {
      data.push({
        name: 'Destination: ' + statements[key].destination,
        subtitle: statements[key].referenceNumber + ': ' + statements[key].policyEffectiveDate
      });
    }

    this.setState({
      dataSource: data
    });
  }

  render() {
    if (!this.state.promiseIsResolved)
        return (<Text style = {styles.text}>Loading...</Text>);
    else if (this.state.promiseIsResolved && this.state.dataSource.length === 0) {
        return (<Text style = {styles.text}>No Statements Found</Text>);
    }
    return (
        <View style={styles.container}>
          <List containerStyle={{marginBottom: 20}}>
            {
              this.state.dataSource.map((l, i) => (
                <ListItem
                  hideChevron={true}
                  key={i}
                  title={l.name}
                  subtitle={l.subtitle}
                />
              ))
            }
          </List> 
        </View>
    );
  }
}