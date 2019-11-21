import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import ProgressScreen from './screens/ProgressScreen';
import GalleryScreen from './screens/GalleryScreen';
import { ActivityIndicator } from 'react-native-paper';

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

class App extends Component {
  state = {
    fish: null
  }

  componentDidMount() {
    AsyncStorage.getItem('coins')
      .then(coins => this.setState({ fish: coins ? coins : 0 }))
      .catch(console.log)
  }

  render() {
    if (!this.state.fish) {
      return <ActivityIndicator />
    }
    return <AppContainer />
  }
}

export default App;
