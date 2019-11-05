import React, { useState, useEffect, useRef } from 'react';
import { View, Modal, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ProgressHeader from '../components/ProgressHeader';
import TaskList from '../components/TaskList';
import AddTask from './AddTask';
import FloatingButton from '../components/FloatingButton';

function ProgressScreen() {
  const [visible, setVisible] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [archivedTasks, setArchivedTasks] = useState([]);
  const init = useRef(true);

  useEffect(() => {
    if (init.current) {
      init.current = false;
      return;
    }

    Promise.all([
      AsyncStorage.setItem('tasks', JSON.stringify(tasks)),
      AsyncStorage.setItem('archived', JSON.stringify(archivedTasks))
    ]);
  }, [tasks, archivedTasks]);

  useEffect(() => {
    Promise.all([
      AsyncStorage.getItem('tasks'),
      AsyncStorage.getItem('archived')
    ]).then(([_tasks, _archivedTasks]) => {
      if (_tasks) {
        //console.log(_tasks);
        setTasks(JSON.parse(_tasks));
      }

      if (_archivedTasks) {
        //console.log(_archivedTasks);
        setArchivedTasks(JSON.parse(_archivedTasks));
      }
    });
  }, []);

  const floatingButtonPress = () => {
    setVisible(!visible);
  };

  const addTaskButtonPress = (task, deadline, rating) => {
    const id = tasks.length + 1;
    const newTask = {
      id: id,
      title: task,
      completed: false,
      deadline: deadline,
      rating: rating
    };
    const updatedTasks = [...tasks, newTask];
    console.log(updatedTasks);
    if (updatedTasks.length > 1) {
      updatedTasks.sort(function(a, b) {
        var d1 = a.deadline.split('-').join('');
        var d2 = b.deadline.split('-').join('');
        return d1 - d2;
      });
    }
    console.log(updatedTasks);
    setTasks(updatedTasks);
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
