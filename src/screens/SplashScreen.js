import React, { Component } from 'react';  
 import { Platform, StyleSheet, View, Text,  
 Image } from 'react-native';  
import LoginScreen from './LoginScreen';
 export default class SplashScreen extends Component  
{  
   constructor(){  
     super();  
     this.state={  
     isVisible : true,  
    }  
  }  
   Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });  
  }  
   
  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  
    }, 9000);  
   }  
   
    render()  
    {  
        let Splash_Screen = (  
             <View style={styles.SplashScreen_RootView}>  
                 <View style={styles.SplashScreen_ChildView}>  
                       <Image source={require('../assets/re.gif')}  
                    style={{width:'100%', height: '100%'}} />  
                </View>  
             </View> )  
         return(  
             <View style = { styles.MainContainer }>  
                 {  
                  (this.state.isVisible === true) ? Splash_Screen : <LoginScreen />  
                }  
            </View>  
              );  
    }  
}  
 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
         
    },  
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
        margin: 10,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#00BCD4',  
        flex:1,  
    },  
});