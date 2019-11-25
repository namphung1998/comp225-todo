import React, { Component } from 'react';
import { AsyncStorage, TouchableHighlightBase } from 'react-native';
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
  // AddTask: {
  //   screen: AddTask,
  //   navigationOptions: {
  //     tabBarVisible: true,
  //   }
  // },
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
    loading: true
  };

  onDeleteTask = id => {
    const { tasks } = this.state;
    const toDelete = tasks.find(item => item.id === id);
    const newTasks = tasks.filter(item => item.id !== id);

    this.setState(state => {
      return {
        tasks: newTasks,
        archivedTask: [...state.archivedTask, toDelete]
      }
    });
  }

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
      }, fish)

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
      complete: false,
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
    Promise.all([
      AsyncStorage.getItem('tasks'),
      AsyncStorage.getItem('archived'),
      AsyncStorage.getItem('index'),
      AsyncStorage.getItem('coins')
    ]).then(([tasks, archivedTask, index, coins]) => {
      this.setState(
        {
          fish: coins ? parseInt(coins) : 0,
          archivedTask: archivedTask
            ? JSON.parse(archivedTask)
            : this.state.archivedTask,
          index: index ? parseInt(index) : this.state.index,
          tasks: tasks ? JSON.parse(tasks) : this.state.tasks
        },
        () => this.setState({ loading: false })
      );
    });
  }

  componentDidUpdate(_, prevState) {
    const { index } = prevState;

    if (index !== this.state.index) {
      AsyncStorage.setItem('index', String(this.state.index))
        .catch(console.log);
    }

    AsyncStorage.setItem('tasks', JSON.stringify(this.state.tasks))
      .catch(console.log);
  }

  render() {
    if (this.state.loading) {
      return <ActivityIndicator />;
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
          onDeleteTask: this.onDeleteTask
        }}
      />
    );
  }
}

export default App;
