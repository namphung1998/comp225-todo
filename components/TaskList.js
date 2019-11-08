import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TaskItem from './TaskItem.js';

function TaskList({ tasks, onCheckBoxToggle, onDeleteTask }) {
  const tasksByDate = tasks.reduce((obj, item) => {
    if (obj[item.deadline]) {
      obj[item.deadline].push(item);
    } else {
      obj[item.deadline] = [item];
    }

    return obj;
  }, {});

  const renderItem = ({ item }) => (
    <TaskItem
      onCheckBoxToggle={onCheckBoxToggle}
      onDelete={onDeleteTask}
      item={item}
    />
  );

  const keyExtractor = item => String(item);

  const renderList = ({ item }) => {
    const data = tasksByDate[item];
    return (
      <View key={item}>
        <View style={{ backgroundColor: '	rgb(220,220,220)', height: 24 }}>
          <Text>{item}</Text>
        </View>
        {data.map(task => (
          <TaskItem
            key={task.id}
            onCheckBoxToggle={onCheckBoxToggle}
            onDelete={onDeleteTask}
            item={task}
          />
        ))}
      </View>
    );
  };  

  return (
    <View style={styles.container}>
      <FlatList
        data={Object.keys(tasksByDate)}
        renderItem={renderList}
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
  }
});

export default TaskList;
