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
      AsyncStorage.setItem('index', String(index))
    ]);
  }, [tasks, archivedTasks, index]);

  useEffect(() => {
    Promise.all([
      AsyncStorage.getItem('tasks'),
      AsyncStorage.getItem('archived'),
      AsyncStorage.getItem('index')
    ]).then(([_tasks, _archivedTasks, _index]) => {
      if (_tasks) {
        setTasks(JSON.parse(_tasks));
      } else {
        setTasks([]);
      }

      if (_archivedTasks) {
        setArchivedTasks(JSON.parse(_archivedTasks));
      } 

      if (_index) {
        setIndex(parseInt(_index));
      } 
    });
  }, []);

  const floatingButtonPress = () => {
    setVisible(!visible);
  };

  const addTaskButtonPress = (task, deadline, rating) => {
    const newTask = {
      id: index,
      title: task,
      completed: false,
      deadline: deadline,
      rating: rating
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
    setIndex(index + 1);
    setVisible(!visible);
  };

  const cancelButtonPress = () => {
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
        numHearts={500}
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
        <Icon name='add' color='white' size={24} />
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
