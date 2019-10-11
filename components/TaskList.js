import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TaskItem from './TaskItem.js';

const data = [
  { title: 'Task1' },
  { title: 'Task2' },
  { title: 'Task3' },
  { title: 'Task4' },
  { title: 'Task5' },
  { title: 'Task6' },
  { title: 'Task7' },
  { title: 'Task8' },
  { title: 'Task9' },
  { title: 'Task10' }
];

function TaskList() {
  console.log('taskList');
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <TaskItem item={item} />}
        keyExtractor={item => item.title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 22,
    // backgroundColor: 'red'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

export default TaskList;
