import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';
import moment from 'moment';

import TaskItem from './TaskItem.js';

function TaskList({ tasksByDate, onCheckBoxToggle, onDeleteTask, onPress }) {
  const data = Object.keys(tasksByDate).map(date => {
    return { title: date, data: tasksByDate[date] };
  });

  const keyExtractor = item => String(item.id);

  const renderItem = ({ item: task }) => {
    return (
      <TaskItem
        key={task.id}
        onCheckBoxToggle={onCheckBoxToggle}
        onDelete={onDeleteTask}
        item={task}
        onPress={onPress}
      />
    )
  };

  const renderSectionHeader = ({ section: { title: date } }) => {
    const currDate = moment(date);
    const dateString = (currDate.isSame(new Date(), 'day') ? 'Today - ' : '') + currDate.format('ddd, MMM D');
    
    return (
      <View style={styles.dateContainer}>
        <Text>{dateString}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <SectionList
        sections={data}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: 'red'
    // paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  },
  dateContainer: {
    backgroundColor: '#dddddd',
    height: 24,
    borderWidth: 2,
    borderColor: '#cccccc'
  }
});

export default TaskList;
