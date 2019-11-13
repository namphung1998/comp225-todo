import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import AddCancelButton from '../components/AddCancelButton';
import DatePicker from 'react-native-datepicker';
import StarRating from 'react-native-star-rating';

function AddTask({ addTaskButtonPress, cancelButtonPress }) {
  const [enteredTask, setEnteredTask] = useState('');

  var day = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear(); //Current Year
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  var todayDate = year + "-" + month + "-" + day;

  const [currentDate, setCurrentDate] = useState(todayDate);
  const [starRating, setStarRating] = useState(3.5);

  const taskInputHandler = enteredTask => {
    setEnteredTask(enteredTask);
  };

  const [enteredDescription, setEnteredDescription] = useState('');
  const descriptionInputHandler = (enteredDescription) => {
    setEnteredDescription(enteredDescription);
  }

  const [enteredDuration, setEnteredDuration] = useState('');
  const durationInputHandler = (enteredDuration) => {
    setEnteredDuration(enteredDuration);
  }

  return (
    <View style={styles.screen}>
      <Text style={{fontSize: 36, color: "pink", alignSelf: "center", padding: 10}}>
        Add Task
      </Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Enter Task Name'
          style={styles.input}
          onChangeText={taskInputHandler}
          value={enteredTask}
        />
      </View>
      <View style={{ flexDirection: 'row', padding: 15 }}>
        <Text style={{ color: 'pink', fontSize: 20, left: -20, top: 7}}> Deadline</Text>
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
              right: 0,
              top: 4,
              marginRight: -15
            },
            dateInput: {
              marginLeft: -10,
              marginRight: 25,
              borderColor: 'black',
              borderWidth: 1,
              
            }
          }}
          onDateChange={date => {
            setCurrentDate(date);
          }}
        />
      </View>
      <Text style={{ color: 'pink', fontSize: 20, left: -5}}> Difficulty </Text>
      <View style={{padding: 10}}>
        <StarRating     
          
          disabled={false}
          maxStars={5}
          rating={starRating}
          selectedStar={rating => {
            setStarRating(rating);
          }}
          halfStarEnabled={true}
          emptyStarColor={'pink'}
          fullStarColor={'pink'}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text style={{ color: 'pink', fontSize: 20, left: -5}}> This task will take about</Text>
      <TextInput
        
          style={{width: '15%', borderColor: 'black', borderWidth: 1}}
          placeholder={'130'}
          keyboardType={'numeric'}
          onChangeText={durationInputHandler}
          value={enteredDuration}
          textAlign={'center'}
        />
        <Text style={{ color: 'pink', fontSize: 20, left: -5}}>  min </Text>
        </View>
      <View style={{padding: 10}}>
        <TextInput 
          placeholder={"Optional Description"}
          numberOfLines={4}
          multiline={true}
          textAlignVertical={'top'}
          style={{width: '100%', borderColor: 'black', borderWidth: 1, padding: 10}}
          onChangeText={descriptionInputHandler}
          value={enteredDescription}
        />
      </View>
      <View 
        flex={1}  
        justifyContent= {'flex-end'}
        marginBottom= {0}> 
        <AddCancelButton
          onAddPress={() => {
            addTaskButtonPress(enteredTask, currentDate, starRating, enteredDescription);
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
    height: '100%'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }
});

export default AddTask;
