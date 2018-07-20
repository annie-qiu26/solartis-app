import { createDrawerNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import NewScreen from '../screens/NewScreen';
import CurrentScreen from '../screens/CurrentScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ChatScreen from '../screens/ChatScreen';
import FriendScreen from '../screens/FriendScreen';

export default createDrawerNavigator({
  Home: {
    screen: HomeScreen,
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
