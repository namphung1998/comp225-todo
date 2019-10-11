import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button} from 'react-native';

function AddTask() {
  const [enteredTask, setEnteredTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const taskInputHandler = (enteredTask) => {
    setEnteredTask(enteredTask);
  };

  const addTaskHandler = () => {
    setTasks(currentTasks => [...currentTasks, enteredTask]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Task Name"
          style={styles.input}
          onChangeText={taskInputHandler}
          value={enteredTask}
        />
        <Button title="ADD" onPress={addTaskHandler}/>
      </View>
      <View>
        {tasks.map((task) =>
          <View><Text key={task}>{task}</Text></View>)}
      </View>
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
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});

export default AddTask;
