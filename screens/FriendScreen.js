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
    alignSelf: 'center',
    marginTop: 15
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

class StoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      story: 'Share your Story',
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      text6: '',
      text7: '',
    };
  };

  shareStory = () => {
    var newStory = this.state.story;
    var userID = firebase.auth().currentUser.uid;
    var storyRef = firebase.database().ref('users/'+userID+'/friends');
    storyRef.once('value').then(
      function(snapshot) {
        var prev = snapshot.val();
        if (prev && prev.story){
          firebase.database().ref('users/'+userID+'/friends').update({
            story: prev.story + newStory + "|"
          })
        }
        if (prev && prev.list){
          firebase.database().ref('users/'+userID+'/friends').once('value').then(
            function(snapshot){
              var friends = snapshot.val();
              if (friends && friends.list){
                var count = 0;
                var friendList = friends.list.split("|");
                for (var key in friendList){
                  var uid = friendList[key];
                  if (uid === "" || uid ===" "){continue;}
                  var friendStory = firebase.database().ref('users/'+uid+'/friends');
                  friendStory.once('value').then(
                    function(snapshot) {
                      var old = snapshot.val();
                      if (old && old.otherStory){
                        firebase.database().ref('users/'+uid+'/friends').update({
                          otherStory: old.story + newStory + "|"
                        })
                      }
                      else{
                        firebase.database().ref('users/'+uid+'/friends').update({
                          otherStory: newStory + "|"
                        })
                      }
                    }
                  )
                }
              }
            }
          )
        }
        if (!prev || !prev.story) {
          firebase.database().ref('users/'+userID+'/friends').update({
            story: newStory + "|"
          })
        }
        Alert.alert('story successfully added');
      }
    )
  };



  refreshStory = () => {
    var pointer = this;
    var acc = ['','','','','','',''];
    var userID = firebase.auth().currentUser.uid;
    firebase.database().ref('users/'+userID+'/friends').once('value').then(
      function(snapshot){
        var friends = snapshot.val()
        if (friends && friends.otherStory){
          var count = 0;
          var storyList = friends.otherStory.split("|");
          for (var key in storyList){ //reverse
            if (count > 6){ break}
            acc[count] = storyList[key];
            count ++;
          }
          console.log("acc",acc);
          pointer.setState({text1:acc[0]});
          pointer.setState({text2:acc[1]});
          pointer.setState({text3:acc[2]});
          pointer.setState({text4:acc[3]});
          pointer.setState({text5:acc[4]});
          pointer.setState({text6:acc[5]});
          pointer.setState({text7:acc[6]});
        }
      }
    )
  };

  render() {
    let text1 = this.state.text1;
    let text2 = this.state.text2;
    let text3 = this.state.text3;
    let text4 = this.state.text4;
    let text5 = this.state.text5;
    let text6 = this.state.text6;
    let text7 = this.state.text7;
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
            onPress={() => this.shareStory()}
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
            onPress={() => this.refreshStory()}
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
      newFriend: "Enter New Friend's User ID"
    };
  }

  AddFriend = () => {
    var uid = firebase.auth().currentUser.uid;
    var newFriendID = this.state.newFriend;
    firebase.database().ref('users/'+uid+'/friends').once('value').then(
    function(snapshot){
      var friendDir = snapshot.val();
      if (friendDir && friendDir.list){
        firebase.database().ref('users/'+uid+'/friends').update({
          list: friendDir.list + newFriendID + "|"
        })
      }
      else{
        firebase.database().ref('users/'+uid+'/friends').update({
          list: newFriendID + "|"
        })
      }
    })
    firebase.database().ref('users/'+newFriendID+'/friends').once('value').then(
    function(snapshot){
      var friendDirr = snapshot.val();
      if (friendDirr && friendDirr.list){
        firebase.database().ref('users/'+newFriendID+'/friends').update({
          list: friendDirr.list + uid + "|"
        })
      }
      else{
        firebase.database().ref('users/'+newFriendID+'/friends').update({
          list: uid + "|"
        })
      }
    })
    Alert.alert('Friend Added');
  }

  render () {
    const text1 = "Your User ID is .."
    const userID = firebase.auth().currentUser.uid
    return (
      <View>
        <Text> {text1} </Text>
        <Text> {userID} </Text>

        <TextInput autoCapitalize="none" style = {styles.TextInput} onChangeText = {(newFriend) => this.setState({newFriend})}
            value={this.state.newFriend}
          />
        <Button
          title="Add New Friend"
          titleStyle={{ fontWeight: "30" }}
          buttonStyle={styles.button}
          onPress={() => this.AddFriend()}
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
