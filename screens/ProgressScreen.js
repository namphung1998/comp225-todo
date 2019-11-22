import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Modal, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import moment from 'moment';

import ProgressHeader from '../components/ProgressHeader';
import TaskList from '../components/TaskList';
import AddTask from './AddTask';
import FloatingButton from '../components/FloatingButton';
import Calendar from '../components/Calendar';


function ProgressScreen() {
  const [visible, setVisible] = useState(false);
  const [tasks, setTasks] = useState(null);
  const [index, setIndex] = useState(1);
  const [coins, setCoins] = useState(0);
  const [archivedTasks, setArchivedTasks] = useState([]);
  const init = useRef(true);

  useEffect(() => {
    if (init.current) {
      init.current = false;
      return;
    }

    Promise.all([
      AsyncStorage.setItem('tasks', JSON.stringify(tasks)),
      AsyncStorage.setItem('archived', JSON.stringify(archivedTasks)),
      AsyncStorage.setItem('index', String(index)),
      AsyncStorage.setItem('coins', String(coins))
    ]);
  }, [tasks, archivedTasks, index, coins]);

  useEffect(() => {
    AsyncStorage.clear();
    Promise.all([
      AsyncStorage.getItem('tasks'),
      AsyncStorage.getItem('archived'),
      AsyncStorage.getItem('index'),
      AsyncStorage.getItem('coins')
    ]).then(([_tasks, _archivedTasks, _index, _coins]) => {
      if (_tasks) {
        setTasks(JSON.parse(_tasks));
        console.log(_tasks)
      } else {
        setTasks([]);
      }

      if (_archivedTasks) {
        setArchivedTasks(JSON.parse(_archivedTasks));
      }

      if (_index) {
        setIndex(parseInt(_index));
      }

      if (_coins) {
        setCoins(parseInt(_coins));
      }
    });
  }, []);

  const floatingButtonPress = () => {
    setVisible(!visible);
  };

  const addTaskButtonPress = (task, deadline, rating, desc, duration) => {
    const newTask = {
      id: index,
      title: task,
      completed: false,
      deadline: deadline,
      rating: rating,
      desc: desc,
      duration: duration
    };
    const updatedTasks = [...tasks, newTask];

    if (updatedTasks.length > 1) {
      updatedTasks.sort(function(a, b) {
        var d1 = a.deadline.split('-').join('');
        var d2 = b.deadline.split('-').join('');
        return d1 - d2;
      });
    }
    setTasks(updatedTasks);
    setIndex(i => i + 1);
    setVisible(!visible);
  };

  const cancelButtonPress = () => {
    setVisible(!visible);
  };

  const onCheckBoxToggle = id => {
    const newTasks = tasks.map(item => {
      if (item.id === id) {
        setCoins(curr => {
          return curr + (item.completed ? - 1 : 1) * 100 * item.rating
        });
        return { ...item, completed: !item.completed };
      }

      return item;
    });
    setTasks(newTasks);
  };

  const onDeleteTask = id => {
    const toDelete = tasks.find(item => item.id === id);
    const newTasks = tasks.filter(item => item.id !== id);
    setTasks(newTasks);
    setArchivedTasks([...archivedTasks, toDelete]);
  };

  if (!tasks ) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <ProgressHeader
        numCompleted={tasks.filter(item => item.completed).length}
        numTotal={tasks.length}
        numHearts={coins}
      />
      <Modal visible={visible}>
        <AddTask
          addTaskButtonPress={addTaskButtonPress}
          cancelButtonPress={cancelButtonPress}
        />
      </Modal>

      <Calendar chosenDate={moment()}/>

      <TaskList
        onCheckBoxToggle={onCheckBoxToggle}
        onDeleteTask={onDeleteTask}
        tasks={tasks}
      />
      <FloatingButton onPress={floatingButtonPress}>
        <Icon name='add' color='black' size={40} />
      </FloatingButton>
    </View>
  );
}

const styles = {
  container: {
    height: '100%',
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: 'red'
  }
};

export default ProgressScreen;
