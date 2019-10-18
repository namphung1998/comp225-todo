import React, { useState, useEffect } from 'react';
import { View, Text, Modal, Button, Platform, AsyncStorage } from 'react-native';

import ProgressHeader from '../components/ProgressHeader';
import TaskList from '../components/TaskList';
import AddTask from './AddTask';
import FloatingButton from '../components/FloatingButton';

const data = [
  {
    id: 1,
    title: 'Project Meeting',
    completed: false,
    deadline: '2019-10-18'
  },
  {
    id: 2,
    title: 'CS Homework',
    completed: true,
    deadline: '2019-10-20'
  },
  {
    id: 3,
    title: 'Buy Snacks',
    completed: false,
    deadline: '2019-10-20'
  }
];

function ProgressScreen() {
  const [visible, setVisible] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('tasks')
      .then(_tasks => JSON.parse(_tasks))
      .then(_tasks => setTasks(_tasks))
  }, [])

  const floatingButtonPress = () => { setVisible(!visible) }

  const addTaskButtonPress = (task, deadline) => {
    const id = tasks.length + 1;
    const newTask = {id: id, title: task, completed: false, deadline: deadline};
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setVisible(!visible);
    AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const cancelButtonPress = () => { setVisible(!visible) };

  const onCheckBoxToggle = id => {
    const newTasks = tasks.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }

      return item;
    });

    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <ProgressHeader
        numCompleted={tasks.filter(item => item.completed).length}
        numTotal={tasks.length}
      />
      <Modal visible={visible}>
        <AddTask addTaskButtonPress={addTaskButtonPress} cancelButtonPress={cancelButtonPress} />
      </Modal>
      <TaskList onCheckBoxToggle={onCheckBoxToggle} tasks={tasks} />
      <FloatingButton onPress={floatingButtonPress} />
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
