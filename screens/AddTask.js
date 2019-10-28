import React, { useState, Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, FlatList } from 'react-native';
import AddCancelButton from '../components/AddCancelButton';
import DatePicker from 'react-native-datepicker';
import DifficultyRating from '../components/DifficultyRating';

function AddTask({ addTaskButtonPress, cancelButtonPress }) {
  const [enteredTask, setEnteredTask] = useState('');

  var date = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear(); //Current Year
  var todayDate = year + '-' + month + '-' + date;

  const [currentDate, setCurrentDate] = useState(todayDate);

  const taskInputHandler = (enteredTask) => {
    setEnteredTask(enteredTask);
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
      </View>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <Text> Due date:</Text>
        <DatePicker
          style={{ width: 200 }}
          date={currentDate}
          mode='date'
          placeholder='select date'
          format='YYYY-MM-DD'
          //minDate="2016-05-15"
          //maxDate="2016-06-01"
          confirmBtnText='Confirm'
          cancelBtnText='Cancel'
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
          onDateChange={date => {
            setCurrentDate(date);
          }}
        />
      </View>
      <View>
        <DifficultyRating/>
      </View>
      <View>
        
        <AddCancelButton
          onAddPress={() => {
            addTaskButtonPress(enteredTask, currentDate);
          }}
          onCancelPress={cancelButtonPress}
          />
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
  }
});

export default AddTask;
