import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import ProgressScreen from './screens/ProgressScreen';

import * as Font from 'expo-font';
import AddTask from './screens/AddTask';

const tabNavigator = createBottomTabNavigator({
  Progress: ProgressScreen,
  AddTask: AddTask
});

const AppContainer = createAppContainer(tabNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
