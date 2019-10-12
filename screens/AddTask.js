import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, FlatList} from 'react-native';

import TaskInput from '../components/TaskInput.js'

function AddTask() {
  const [enteredTask, setEnteredTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const taskInputHandler = (enteredTask) => {
    setEnteredTask(enteredTask);
  };

  const addTaskHandler = () => {
    setTasks(currentTasks => [
      ...currentTasks,
      { id: Math.random().toString(), value: enteredTask }
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Task Name"
          style={styles.input}
          onChangeText={taskInputHandler}
          value={enteredTask}
        />
        <Button title="ADD" onPress={addTaskHandler}/>
      </View>
      <FlatList
      keyExtractor={(item, index) => item.id}
        data={tasks}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default AddTask;
