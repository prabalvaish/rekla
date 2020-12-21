import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import * as firebase from 'firebase';
import {
  FirebaseRecaptchaVerifierModal,
  FirebaseAuthApplicationVerifier,
} from 'expo-firebase-recaptcha';
import { withNavigation } from 'react-navigation';
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      verificationId: '',
      verificationCode: '',
    };
    recaptchaVerifier: FirebaseAuthApplicationVerifier;
  }
  
  onPressSendCode = async () => {
    console.log(this.state.phoneNumber);

    try {
      const phoneNumber = '+91'+ this.state.phoneNumber;
      const phoneProvider = new firebase.auth.PhoneAuthProvider();
      const verificationId = await phoneProvider.verifyPhoneNumber(
        phoneNumber,
        this.recaptchaVerifier
      );
      this.props.navigation.navigate('OtpScreen',{
        phonenumber: this.state.phoneNumber,
        verficationid: verificationId
      });
      
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <FirebaseRecaptchaVerifierModal
          ref={ref => (this.recaptchaVerifier = ref)}
          firebaseConfig={firebase.app().options}
        />
        <View
          style={{
            flex: 15,
            width: 420,
            height: 600,
            backgroundColor: '#323232',
          }}
        >
          <Image
            source={require('../assets/reklogo.png')}
            style={{
              width: '50%',
              height: '50%',
              alignSelf: 'center',
              marginTop: 150,
            }}
          />
        </View>
        <View style={styles.view1}>
          <Text style={styles.text}>Service need at your Doorstep.</Text>
        </View>
        <View style={{ justifyContent: 'center', paddingLeft: 50 }}>
          <PhoneInput
            placeholder="Enter phone number"
            layout="first"
            withShadow
            style={{ width: 420, height: 600 }}
            onChangeText={text => {
              this.setState({ phoneNumber: text });
            }}
          />
        </View>
        <View style={{ flex: 2 }}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={this.onPressSendCode.bind(this)}
            style={{
              height: 50,
              width: 50,
              backgroundColor: '#ccee',
              position: 'absolute',
              bottom: 10,
              right: 10,
            }}
          >
            <Text>signUp</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 3, justifyContent: 'center', paddingLeft: 10 }}>
          <Text>
            By Continuing you are agree that you have read an accepting our T&Cs
            and Privacy Policy.
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    flex: 3,
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 20,
    marginLeft: 50,
  },
});

export default withNavigation(LoginScreen);
