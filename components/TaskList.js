import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TaskItem from './TaskItem.js';

function TaskList({ tasks, onCheckBoxToggle }) {
  const renderItem = ({ item }) => (
    <TaskItem onCheckBoxToggle={onCheckBoxToggle} item={item} />
  );
  const keyExtractor = item => String(item.id);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
