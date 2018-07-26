import { createDrawerNavigator } from 'react-navigation';

import MainScreen from '../screens/MainScreen';
import NewScreen from '../screens/NewScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ChatScreen from '../screens/ChatScreen';
import FriendScreen from '../screens/FriendScreen';
import SettingsScreen from '../screens/SettingsScreen';

const MainDrawerNavigator = createDrawerNavigator({
  Main: {
    screen: MainScreen,
  },
  New: {
    screen: NewScreen,
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