import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


//Attempting to separate out this component from AddTask
function TaskInput() {
  const [enteredTask, setEnteredTask] = useState('')

  const taskInputHandler = enteredTask => {
    setEnteredTask(enteredTask);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter Task Here"
        style={styles.input}
        onChangeText={taskInputHandler}
        value={enteredTask}
      />
      <Button title="ADD" onPress={addTaskHandler}/>
    </View>
  );
};

const styles = StyleSheet.create({
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
  }
});

// const TaskItem = props => {
//   return (
//     <View style={styles.listItem}>
//       <Text>{props.children}</Text>
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   listItem: {
//     padding: 10,
//     marginVertical: 10,
//     backgroundColor: '#ccc',
//     borderColor: 'black',
//     borderWidth: 1
//   }
// })

export default TaskInput;
