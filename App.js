import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer} from 'react-navigation'; 
import {createBottomTabNavigator} from 'react-navigation-tabs';
// You can import from local files
import FaceBookScreen from './components/FaceBookScreen';
import InstagramScreen from './components/InstagramScreen';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Appcontainer />
      </View>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  FaceBook : {screen:FaceBookScreen},
  Instagram: {screen : InstagramScreen}
})
const Appcontainer = createAppContainer(TabNavigator)