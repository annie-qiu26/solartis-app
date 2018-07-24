import { createDrawerNavigator } from 'react-navigation';

import MainScreen from '../screens/MainScreen';
import NewScreen from '../screens/NewScreen';
import CurrentScreen from '../screens/CurrentScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ChatScreen from '../screens/ChatScreen';
import FriendScreen from '../screens/FriendScreen';

export default createDrawerNavigator({
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
});
