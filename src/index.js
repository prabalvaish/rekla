import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
  SplashScreen, HomeScreen
} from './screens';

const Router = createStackNavigator(
  {
    SplashScreen,
    HomeScreen
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

export default createAppContainer(Router);
