import React, { useState } from 'react';
import { View, Text, Modal, Button, Platform } from 'react-native';
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
  const [tasks, setTasks] = useState(data);

  const addTaskButtonPress = () => {
    setVisible(!visible);
  };

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
        <AddTask onPress={addTaskButtonPress} />
      </Modal>
      <TaskList addTaskButtonPress={addTaskButtonPress} onCheckBoxToggle={onCheckBoxToggle} tasks={tasks} />
      <FloatingButton onPress={addTaskButtonPress} />
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
