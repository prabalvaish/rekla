import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import * as firebase from 'firebase';

export default class OtpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pin1: '',
      pin2: '',
      pin3: '',
      pin4: '',
      pin5: '',
      pin6: '',
      phonenumber: '',
      verificationId:'',
      confirmResult: null, 
      verificationCode: ''
    };
    const { navigation } = this.props;
    this.state.phonenumber = navigation.getParam('phonenumber');
    this.state.verificationId= navigation.getParam('verficationid');
  }
  componentDidMount = () => {
    this.pin1ref.focus();
    alert(this.state.verificationId);
  };

  handleVerifyCode = async () => {
    // Request for OTP verification
    const otp = this.state.pin1 +  this.state.pin2 +this.state.pin3 + this.state.pin4 + this.state.pin5 + this.state.pin6;
    alert(otp);
    var credential = firebase.auth.PhoneAuthProvider.credential(this.state.verificationId, otp);
   var login =  firebase.auth().signInWithCredential(credential);

    alert(login);
    }
  
  render() {
    const { pin2, pin3, pin4, pin5, pin6 } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#000', marginTop: '35%', fontSize: 28 }}>
          {'Enter OTP to verify your Login'}
        </Text>
        <Text
          style={{
            color: '#000',
            marginTop: '3%',
            marginBottom: '10%',
            fontSize: 18,
          }}
        >
          {'Wait for auto verify the OTP sent to '}
          {'+91' + this.state.phonenumber}
        </Text>
        <View
          style={{
            flex: 0.6,
            justifyContent: 'space-evenly',
            flexDirection: 'row',
          }}
        >
          <TextInput
            ref={input => {
              this.pin1ref = input;
            }}
            onChangeText={text => {
              this.setState({ pin1: text });
              if (this.state.pin1 != '') {
                this.pin2ref.focus();
              }
            }}
            returnKeyType="next"
            onSubmitEditing={() => {
              this.pin2ref.focus();
            }}
            blurOnSubmit={false}
            value={this.state.pin1}
            maxLength={1}
            style={{
              backgroundColor: 'white',
              fontWeight: '600',
              alignSelf: 'center',
              fontSize: 20,
              height: 55,
              width: '10%',
              borderRadius: 10,
              borderWidth: 0.5,
              borderColor: 'grey',
              alignContent: 'center',
              textAlign: 'center',
            }}
          />
          <TextInput
            ref={input => {
              this.pin2ref = input;
            }}
            onChangeText={text => {
              this.setState({ pin2: text });
              if (this.state.pin2 != '') {
                this.pin3ref.focus();
              }
            }}
            returnKeyType="next"
            onSubmitEditing={() => {
              this.pin3ref.focus();
            }}
            blurOnSubmit={false}
            value={this.state.pin2}
            maxLength={1}
            style={{
              backgroundColor: 'white',
              fontWeight: '600',
              alignSelf: 'center',
              fontSize: 20,
              height: 55,
              width: '10%',
              borderRadius: 10,
              borderWidth: 0.5,
              borderColor: 'grey',
              alignContent: 'center',
              textAlign: 'center',
            }}
          />
          <TextInput
            ref={input => {
              this.pin3ref = input;
            }}
            onChangeText={text => {
              this.setState({ pin3: text });
              if (this.state.pin3 != '') {
                this.pin3ref.focus();
              }
            }}
            returnKeyType="next"
            onSubmitEditing={() => {
              this.pin4ref.focus();
            }}
            blurOnSubmit={false}
            value={this.state.pin3}
            maxLength={1}
            style={{
              backgroundColor: 'white',
              fontWeight: '600',
              alignSelf: 'center',
              fontSize: 20,
              height: 55,
              width: '10%',
              borderRadius: 10,
              borderWidth: 0.5,
              borderColor: 'grey',
              alignContent: 'center',
              textAlign: 'center',
            }}
          />
          <TextInput
            ref={input => {
              this.pin4ref = input;
            }}
            onChangeText={text => {
              this.setState({ pin4: text });
              if (this.state.pin4 != '') {
                this.pin3ref.focus();
              }
            }}
            returnKeyType="next"
            onSubmitEditing={() => {
              this.pin5ref.focus();
            }}
            blurOnSubmit={false}
            value={this.state.pin4}
            maxLength={1}
            style={{
              backgroundColor: 'white',
              fontWeight: '600',
              alignSelf: 'center',
              fontSize: 20,
              height: 55,
              width: '10%',
              borderRadius: 10,
              borderWidth: 0.5,
              borderColor: 'grey',
              alignContent: 'center',
              textAlign: 'center',
            }}
          />
          <TextInput
            ref={input => {
              this.pin5ref = input;
            }}
            onChangeText={text => {
              this.setState({ pin5: text });
              if (this.state.pin5 != '') {
                this.pin3ref.focus();
              }
            }}
            returnKeyType="next"
            onSubmitEditing={() => {
              this.pin6ref.focus();
            }}
            blurOnSubmit={false}
            value={this.state.pin5}
            maxLength={1}
            style={{
              backgroundColor: 'white',
              fontWeight: '600',
              alignSelf: 'center',
              fontSize: 20,
              height: 55,
              width: '10%',
              borderRadius: 10,
              borderWidth: 0.5,
              borderColor: 'grey',
              alignContent: 'center',
              textAlign: 'center',
            }}
          />
          <TextInput
            ref={input => {
              this.pin6ref = input;
            }}
            onChangeText={text => {
              this.setState({ pin6: text });
              if (this.state.pin6 != '') {
                this.pin3ref.focus();
              }
            }}
            returnKeyType="next"
            //  onSubmitEditing={() => { this.pin4ref.focus(); }}
            blurOnSubmit={false}
            value={this.state.pin6}
            maxLength={1}
            style={{
              backgroundColor: 'white',
              fontWeight: '600',
              alignSelf: 'center',
              fontSize: 20,
              height: 55,
              width: '10%',
              borderRadius: 10,
              borderWidth: 0.5,
              borderColor: 'grey',
              alignContent: 'center',
              textAlign: 'center',
            }}
          />
        </View>
        <View
          style={{
            margin: 50,
            justifyContent: 'center',
            alignItems: 'center',
            width: '75%',
          }}
        >
          <TouchableOpacity
           onPress={this.handleVerifyCode}
          >
            <Text style={StyleSheet.textResend}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            margin: 50,
            justifyContent: 'center',
            alignItems: 'center',
            width: '75%',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              alert('jj');
            }}
          >
            <Text style={StyleSheet.textResend}>Resend OTP(24)</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
