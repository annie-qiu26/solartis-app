import { createDrawerNavigator } from 'react-navigation';

import MainScreen from '../screens/MainScreen';
import NewScreen from '../screens/NewScreen';
import CurrentScreen from '../screens/CurrentScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ChatScreen from '../screens/ChatScreen';
import FriendScreen from '../screens/FriendScreen';
import SettingsScreen from '../screens/SettingsScreen';
import HomeScreen from '../screens/HomeScreen';

const MainDrawerNavigator = createDrawerNavigator({
  Main: {
    screen: MainScreen,
  },
  New: {
    screen: NewScreen,
  },
  Current: {
    screen: CurrentScreen,
  },
  History: {
    screen: HistoryScreen,
  },
  Chat: {
    screen: ChatScreen,
  },
  Friend: {
    screen: FriendScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
});

export default MainDrawerNavigator;