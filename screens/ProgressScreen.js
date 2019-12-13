import React, { useState } from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';
import ProgressHeader from '../components/ProgressHeader';
import TaskList from '../components/TaskList';
import AddTask from './AddTask';
import TaskDetail from '../components/TaskDetail';
import FloatingButton from '../components/FloatingButton';
import Calendar from '../components/Calendar';
import { getFullWeek } from '../utils';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function ProgressScreen({
  screenProps: { fish, onAddButtonPress, onCheckBoxToggle, tasks, onDeleteTask }
}) {
  const [visible, setVisible] = useState(false);

  const today = moment();
  const [chosenDate, setChosenDate] = useState(today);

  const [detailId, setDetailId] = useState(null);

  const floatingButtonPress = () => setVisible(!visible);
  const taskDetailPress = id => setDetailId(id);
  const overlayPress = () => setDetailId(null);

  const addTaskButtonPress = (title, deadline, rating, desc, duration) => {
    onAddButtonPress({ title, deadline, rating, desc, duration }, () =>
      setVisible(!visible)
    );
  };

  const cancelButtonPress = () => {
    setVisible(!visible);
  };

  const incompletedTasks = tasks.filter(item => !item.completed);
  const isEmpty = incompletedTasks.length === 0;

  const tasksByDate = incompletedTasks
    .reduce((obj, item) => {
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
    return { ...day, enabled: !!tasksByDate[key] };
  });

  console.log(detailId);

  return (
    <View style={styles.container}>
      <ProgressHeader
        numCompleted={tasks.filter(item => item.completed).length}
        numTotal={tasks.length}
        numHearts={fish}
      />
      <Modal animationType='slide' visible={visible}>
        <AddTask
          addTaskButtonPress={addTaskButtonPress}
          cancelButtonPress={cancelButtonPress}
        />
      </Modal>

      <Modal transparent={true} animationType='fade' visible={!!detailId}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={overlayPress}
          style={styles.modalOverlay}
        />
        <View style={styles.detail}>
          <TaskDetail
            item={tasks.find(item => item.id === detailId)}
            onDelete={onDeleteTask}
            setDetailId={setDetailId}
            // addTaskButtonPress={addTaskButtonPress}
            // cancelButtonPress={cancelButtonPress}
          />
        </View>
      </Modal>

      <Calendar
        chosenDate={chosenDate}
        today={today}
        setChosenDate={setChosenDate}
        daysToShow={daysToShow}
      />

      {isEmpty && <Text style={styles.noTaskText}>No Tasks!</Text>}
      <TaskList
        onCheckBoxToggle={onCheckBoxToggle}
        onDeleteTask={onDeleteTask}
        tasksByDate={tasksByDate}
        onPress={taskDetailPress}
      />

      <FloatingButton
        onPress={floatingButtonPress}
        style={styles.addTaskButton}
      >
        <Icon name='add' color='black' size={40} />
      </FloatingButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: 'red'
  },
  addTaskButton: {
    borderWidth: 1.5
  },
  detail: {
    backgroundColor: 'white',
    height: Dimensions.get('screen').height / 3,
    top: Dimensions.get('screen').height / 2 - 100,
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black'
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  noTaskText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 150
  }
});

export default ProgressScreen;
