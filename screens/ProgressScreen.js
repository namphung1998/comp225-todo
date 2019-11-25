import React, { useState } from 'react';
import { View, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import moment from 'moment';

import ProgressHeader from '../components/ProgressHeader';
import TaskList from '../components/TaskList';
import AddTask from './AddTask';
import FloatingButton from '../components/FloatingButton';
import Calendar from '../components/Calendar';

function ProgressScreen({
  screenProps: { fish, onAddButtonPress, onCheckBoxToggle, tasks, onDeleteTask }
}) {
  const [visible, setVisible] = useState(false);

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

      <Calendar chosenDate={moment()} />

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
