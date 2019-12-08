import React, { useRef }  from 'react';
import { View, Text, Modal, StyleSheet, SectionList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';

import TaskCompleted from '../components/TaskCompleted';
import TaskDetail from '../components/TaskDetail';
import ProgressHeader from '../components/ProgressHeader';

function HistoryScreen({
  screenProps: { fish, tasks }
}) {

  const listRef = useRef(null);

  const tasksByDate = tasks.reduce((obj, item) => {
    if (obj[item.deadline]) {
      obj[item.deadline].push(item);
    } else {
      obj[item.deadline] = [item];
    }

    return obj;
  }, {});

  const data = Object.keys(tasksByDate).map(date => {
    return { title: date, data: tasksByDate[date] };
  });

  const keyExtractor = item => String(item.id);

  const renderSectionHeader = ({ section: { title: date } }) => {
    const currDate = moment(date);
    const dateString = (currDate.isSame(new Date(), 'day') ? 'Today - ' : '') + currDate.format('ddd, MMM D');

    return (
      <View style={styles.dateContainer}>
        <Text>{dateString}</Text>
      </View>
    )
  }

  const renderItem = ({ item: task }) => (
    <TaskCompleted
      key={task.id}
      item={task}
    />
  );

  return (
    <View style={styles.screen}>

      <ProgressHeader
        numCompleted={tasks.filter(item => item.completed).length}
        numTotal={tasks.length}
        numHearts={fish}
      />

      <Text style={styles.titleStyle}>
        History
      </Text>

      <SectionList
        ref={listRef}
        sections={data}
        renderSectionHeader={renderSectionHeader}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 36,
    color: '#eaabbe',
    alignSelf: 'center',
    padding: 10,
    fontWeight: 'bold'
  },

  dateContainer: {
    backgroundColor: '#dddddd',
    height: 24,
    borderWidth: 2,
    borderColor: '#cccccc'
  }
});


export default HistoryScreen;
