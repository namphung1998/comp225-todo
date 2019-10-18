import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, FlatList} from 'react-native';
import AddCancelButton from '../components/AddCancelButton';
//import TaskInput from '../components/TaskInput.js'
import DueDatePicker from '../components/DueDatePicker.js'

function AddTask({onPress}) {
  const [enteredTask, setEnteredTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const taskInputHandler = (enteredTask) => {
    setEnteredTask(enteredTask);
  };

  //This just prints right now...
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
      <View style={{flexDirection: 'row', padding: 10}}>
        <Text> Due date:</Text>
        <DueDatePicker/>
      </View>
      <View>
        <AddCancelButton onPress={onPress}/>  
      </View>    
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    height: '100%',
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
  },
  dueDate: {
    
  }
});

export default AddTask;
