import React from 'react';
import { StyleSheet, View, Image, Text, TextInput,TouchableOpacity, ImageBackground,ScrollView } from 'react-native';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

export default SideBar = props => (
    <ScrollView>
        <ImageBackground source={require('../assets/reklogo.png')} style={{ width: undefined, padding: 60,marginTop:48, borderWidth:3 }}>
        </ImageBackground>
        <View>
            <DrawerNavigatorItems {...props} />
        </View>
    </ScrollView>
);