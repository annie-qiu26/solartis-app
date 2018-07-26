import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Alert
} from 'react-native';

import { Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation'; 
import * as firebase from 'firebase';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTop: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    padding: 20,
  },
  containerBottom: {
    position: 'absolute',
    bottom: 125,
    alignItems: 'center',
    alignSelf: 'center'
  },
  button: {
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5,
    alignSelf: 'center'
  },
  tabIcon: {
    width: 16,
    height: 16,
  },
  TextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  Text: {
    textAlign: 'left',
  }
});

<<<<<<< HEAD
class StoryScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      story: 'Share your Story'
    };
=======
export default class FriendScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Friend',
>>>>>>> origin/master
  };

  shareStory = () => {
    var newStory = this.state.story;
    var userID = firebase.auth().currentUser.uid;
    var storyRef = firebase.database().ref('users/'+userID+'/friends/story');
    storyRef.once('value').then(
      function(snapshot) {
        var prev = snapshot.val()
      }).then(
      function(){
        if (prev){
          firebase.database().ref('users/'+userID+'/friends').update({
            story: prev.append(newStory)
          })
        }
        else {
          firebase.database().ref('users/'+userID+'/friends').update({
            story: [newStory]
          })
        }
        Alert.alert('success');
      })
  }

  refreshStory = () => {
    var userID = firebase.auth().currentUser.uid;
    firebase.database().ref('users/'+userID+'/friends').once('value').then(
      function(snapshot){
        var friends = snapshot.val()
        if (friends){
          this.fillFriendsStories(friends)
        }
      }
    )
  };

  acc = ['','','','','','',''];

  fillFriendsStories = (friends) => {
    var count = 0;
    for (var uid in friends){
      var friendStory = null;
      if (count > 6){ break}
      firebase.database().ref('users/'+userID+'/friends').once('value').then(
        function(snapshot){
          try{
            friendStory = snapshot.val().story;
          }
          catch(err){}
          if (friendStory){
            acc[count] = friendStory;
            count ++
          }
        }
      )
    }
  }

  render() {
    let text1 = this.acc[0];
    let text2 = this.acc[1];
    let text3 = this.acc[2];
    let text4 = this.acc[3];
    let text5 = this.acc[4];
    let text6 = this.acc[5];
    let text7 = this.acc[6];
    return (
      <View style={styles.container}>
        <View style={styles.containerTop}>
          <TextInput style = {styles.TextInput} onChangeText = {(story) => this.setState({story})}
            value={this.state.story}
          />
          <Button
            title="Share Story"
            titleStyle={{ fontWeight: "30" }}
            buttonStyle={styles.button}
            onPress={() => this.shareStory}
          />
          <Button
            title="Add Friends"
            titleStyle={{ fontWeight: "30" }}
            buttonStyle={styles.button}
            onPress={() => this.props.navigation.navigate('AddFriendScreen')}
          />
        </View>
        <View style={styles.containerBottom}>
          <Text style={styles.Text}>Friends' Story</Text>
          <Button
            title="Refresh Story"
            titleStyle={{ fontWeight: "30" }}
            buttonStyle={styles.button}
            onPress={() => this.refreshStory}
          />
          <Text>{text1}</Text>
          <Text>{text2}</Text>
          <Text>{text3}</Text>
          <Text>{text4}</Text>
          <Text>{text5}</Text>
          <Text>{text6}</Text>
          <Text>{text7}</Text>
        </View>
      </View>
    );
  }
}

class AddFriendScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriend: 'New Friend User ID'
    };
  }

  AddFriend = () => {
    uid = firebase.auth().currentUser.uid;
    newFriendID = this.state.newFriend;
    friendList;
    firebase.database().ref('users/'+uid+'/friends').once('value').then(
    function(snapshot){
      friendList = snapshot.val().list;
      firebase.database().ref('users/'+uid+'/friends').update({
        list: friendList.append(newFriendID)
      })
    })
    friendListt;
    firebase.database().ref('users/'+newFriendID+'/friends').once('value').then(
    function(snapshot){
      friendListt = snapshot.val().list;
      firebase.database().ref('users/'+newFriendID+'/friends').update({
        list: friendListt.append(uid)
      })
    })
  }

  render () {
    var userID = this.state.uid;
    return (
      <View>
        <Text> Your User ID is </Text>
        <Text> {userID} </Text>

        <TextInput style = {styles.TextInput} onChangeText = {(newFriend) => this.setState({newFriend})}
            value={this.state.newFriend}
          />
        <Button
          title="Add New Friend"
          titleStyle={{ fontWeight: "30" }}
          buttonStyle={styles.button}
          onPress={() => this.AddFriend}
        />
      </View>
    )
  }
}

const FriendScreen = createStackNavigator ({
  StoryScreen: {
    screen: StoryScreen,
  },
  AddFriendScreen: {
    screen: AddFriendScreen,
  }
});

export default FriendScreen;
