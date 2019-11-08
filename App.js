import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import ProgressScreen from './screens/ProgressScreen';
import GalleryScreen from './screens/GalleryScreen';

const tabNavigator = createBottomTabNavigator({
  Progress: {
    screen: ProgressScreen,
    navigationOptions: {
      tabBarVisible: true
    }
  },
  Gallery: {
    screen: GalleryScreen,
    navigationOptions: {
      tabBarVisible: true,
    }
  }
});

const AppContainer = createAppContainer(tabNavigator);

export default function App() {
  return <AppContainer />;
}
