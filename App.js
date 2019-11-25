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
      tabBarVisible: true
    }
  }
});

const AppContainer = createAppContainer(tabNavigator);

class App extends Component {
  state = {
    fish: null,
    tasks: [],
    archivedTask: [],
    index: 1,
    init: true
  };

  componentDidMount() {
    Promise.all([
      AsyncStorage.getItem('tasks'),
      AsyncStorage.getItem('archived'),
      AsyncStorage.getItem('index'),
      AsyncStorage.getItem('coins')
    ]).then(([tasks, archivedTask, index, coins]) => {
      this.setState(
        {
          fish: coins ? parseInt(coins) : 0,
          archivedTask: archivedTask ? JSON.parse(archivedTask) : this.state.archivedTask,
          index: index ? parseInt(index) : this.state.index,
          tasks: tasks ? JSON.parse(tasks) : this.state.tasks
        },
        () => this.setState({ init: false })
      );
    });
  }

  componentDidUpdate(_, prevState) {
    console.log('update', prevState);
  }

  render() {
    if (this.state.init) {
      return <ActivityIndicator />;
    }
    return (
      <AppContainer screenProps={{
        fish: this.state.fish
      }} />
    );
  }
}

export default App;
