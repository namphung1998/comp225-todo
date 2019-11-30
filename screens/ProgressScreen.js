import React, { useState } from 'react';
import { View, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import moment from 'moment';

import ProgressHeader from '../components/ProgressHeader';
import TaskList from '../components/TaskList';
import AddTask from './AddTask';
import FloatingButton from '../components/FloatingButton';
import Calendar from '../components/Calendar';
import { getFullWeek } from '../utils';

function ProgressScreen({
  screenProps: { fish, onAddButtonPress, onCheckBoxToggle, tasks, onDeleteTask }
}) {
  const [visible, setVisible] = useState(false);
  const today = moment();
  const [chosenDate, setChosenDate] = useState(today);

  const floatingButtonPress = () => {
    setVisible(!visible);
  };

  const addTaskButtonPress = (title, deadline, rating, desc, duration) => {
    onAddButtonPress({ title, deadline, rating, desc, duration }, () =>
      setVisible(!visible)
    );
  };

  const cancelButtonPress = () => {
    setVisible(!visible);
  };

  const tasksByDate = tasks.reduce((obj, item) => {
    if (obj[item.deadline]) {
      obj[item.deadline].push(item);
    } else {
      obj[item.deadline] = [item];
    }

    return obj;
  }, {});

  const daysInWeek = getFullWeek(chosenDate);
  const daysToShow = daysInWeek.map(day => {
    const key = moment(day).format('YYYY-MM-DD');
    return { ...day, disabled: tasksByDate[key] ? false : true } 
  });

  return (
    <View style={styles.container}>
      <ProgressHeader
        numCompleted={tasks.filter(item => item.completed).length}
        numTotal={tasks.length}
        numHearts={fish}
      />
      <Modal visible={visible}>
        <AddTask
          addTaskButtonPress={addTaskButtonPress}
          cancelButtonPress={cancelButtonPress}
        />
      </Modal>

      <Calendar 
        chosenDate={chosenDate} 
        today={today} 
        setChosenDate={setChosenDate}
        daysToShow={daysToShow}
      />

      <TaskList
        onCheckBoxToggle={onCheckBoxToggle}
        onDeleteTask={onDeleteTask}
        tasksByDate={tasksByDate}
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
