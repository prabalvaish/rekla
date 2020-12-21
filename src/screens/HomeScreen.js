import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View style={{ width: 50, height: 50 }}>
          <TouchableOpacity onPress={this.props.navigation.openDrawer}>
            <Image
              source={require('../assets/menu.png')}
              style={{
                width: '50%',
                height: '50%',
                alignSelf: 'flex-start',
                marginTop: 70,
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop:60}}>
          <SearchBar
            placeholder="Type Here..."
          
          />
        </View>
      </View>
    );
  }
}
