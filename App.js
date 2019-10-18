import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import ProgressScreen from './screens/ProgressScreen';

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
