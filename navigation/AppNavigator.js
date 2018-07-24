import { createSwitchNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import MainDrawerNavigator from './MainDrawerNavigator';

export default createSwitchNavigator(
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  {
  	Initial: HomeScreen,
  	Main: MainDrawerNavigator,
  },
  {
  	initialRouteName: 'Initial',
  }
);