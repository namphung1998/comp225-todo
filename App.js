import React, { Component } from 'react';
import { AsyncStorage, ActivityIndicator, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ProgressScreen from './screens/ProgressScreen';
import GalleryScreen from './screens/GalleryScreen';
import HistoryScreen from './screens/HistoryScreen';
import * as Font from 'expo-font';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

const tabNavigator = createBottomTabNavigator(
  {
    Progress: {
      screen: ProgressScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name='home' size={24} color={tintColor} />,
        tabBarVisible: true
      }
    },
    Gallery: {
      screen: GalleryScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name='paint-brush' size={24} color={tintColor} />,
        tabBarVisible: true
      }
    },
    History: {
      screen: HistoryScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => <Icon name='trophy' size={24} color={tintColor} />,
        tabBarVisible: true
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: '#674ea4',
      inactiveTintColor: '#000000',
      inactiveBackgroundColor: '#d8d7f4',
      activeBackgroundColor: '#d8d7f4'
    }
  }
);

const AppContainer = createAppContainer(tabNavigator);

class App extends Component {
  state = {
    fontLoaded: false,
    fish: null,
    tasks: [],
    index: 1,
    loading: true
  };

  decrementFish = () => {
    this.setState(state => {
      return {
        fish: state.fish - 500
      };
    });
  };

  onDeleteTask = (id, callback) => {
    callback();
    const { tasks } = this.state;
    const newTasks = tasks.filter(item => item.id !== id);

    this.setState({ tasks: newTasks });
  };

  onCheckBoxToggle = id => {
    this.setState(({ tasks, fish }) => {
      const newTasks = tasks.map(item => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        }

        return item;
      });

      const newFish = tasks.reduce((result, item) => {
        if (item.id === id) {
          return result + (item.completed ? -1 : 1) * 100 * item.rating;
        }

        return result;
      }, fish);

      return {
        tasks: newTasks,
        fish: newFish
      };
    });
  };

  onAddButtonPress = (
    { title, deadline, rating, desc, duration },
    callback
  ) => {
    const task = {
      id: this.state.index,
      completed: false,
      title,
      rating,
      deadline,
      desc,
      duration
    };

    this.setState(state => {
      return {
        tasks: [...state.tasks, task].sort((a, b) => {
          var d1 = a.deadline.split('-').join('');
          var d2 = b.deadline.split('-').join('');
          return d1 - d2;
        }),
        index: state.index + 1
      };
    }, callback);
  };

  componentDidMount() {
    // AsyncStorage.clear();
    // return;
    Promise.all([
      AsyncStorage.getItem('tasks'),
      AsyncStorage.getItem('index'),
      AsyncStorage.getItem('coins')
    ]).then(([tasks, index, coins]) => {
      this.setState(
        {
          fish: coins ? parseInt(coins) : 0,
          index: index ? parseInt(index) : this.state.index,
          tasks: tasks ? JSON.parse(tasks) : this.state.tasks
        },
        () => this.setState({ loading: false })
      );
    });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.loading) return;

    const { index, fish, tasks } = prevState;

    if (index !== this.state.index) {
      AsyncStorage.setItem('index', String(this.state.index))
        .catch(console.log);
    }

    if (tasks !== this.state.tasks) {
      AsyncStorage.setItem('tasks', JSON.stringify(this.state.tasks))
        .catch(console.log);
    }

    if (fish !== this.state.fish) {
      AsyncStorage.setItem('coins', String(this.state.fish))
        .catch(console.log);
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.loadingScreen}>
          <ActivityIndicator size='large'/>
        </View>
        
      );
    }

    const { fish, tasks, archivedTask, index } = this.state;

    return (
      <AppContainer
        screenProps={{
          fish,
          tasks,
          archivedTask,
          index,
          onAddButtonPress: this.onAddButtonPress,
          onCheckBoxToggle: this.onCheckBoxToggle,
          onDeleteTask: this.onDeleteTask,
          decrementFish: this.decrementFish
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  loadingScreen: {
    justifyContent: 'center',
    flex: 1,
  }
});

export default App;
