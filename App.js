import React from 'react';
import { Provider } from 'react-native-paper';
import App from './src';
import { theme } from './src/core/theme';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {HomeScreen,SplashScreen,OtpScreen,DetailScreen} from './src/screens'
import SideBar from './src/components/SideBar';
import { Dimensions } from 'react-native';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyA4bsUTMgT1fpWpap3UbFL6mRfxvNWx2-A",
  authDomain: "rekla-c08d6.firebaseapp.com",
  databaseURL: "https://rekla-c08d6-default-rtdb.firebaseio.com",
  projectId: "rekla-c08d6",
  storageBucket: "rekla-c08d6.appspot.com",
  messagingSenderId: "951952853695",
  appId: "1:951952853695:web:38b2e9402e69203df4540a",
  measurementId: "G-EQXZT9EP19"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const DrawerNavigator= createDrawerNavigator({
  HomeScreen:{
    screen:HomeScreen,
    navigationOptions:{
      title:"Home"
    }
  },
  SplashScreen:{
    screen:SplashScreen,
    navigationOptions:{
      title:"Splash"
    }
  },
  OtpScreen:{
    screen:OtpScreen,
    navigationOptions:{
      title:"OTP"
    }
  },
  DetailScreen:{
    screen:DetailScreen,
    navigationOptions:{
      title:'detail'
    }
  }
}, 
{
  contentComponent: props=> <SideBar {...props} />,
  drawerWidth:Dimensions.get('window').width*0.65,
  hideStatusBar:false
})

export default createAppContainer(DrawerNavigator);


