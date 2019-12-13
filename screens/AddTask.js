import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView, } from 'react-native';
import AddCancelButton from '../components/AddCancelButton';
import DatePicker from 'react-native-datepicker';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/FontAwesome'

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
  const [starRating, setStarRating] = useState(2.5);

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
    <ScrollView style={styles.screen}>
      <Text style={styles.titleStyle}>
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
        <Text style={styles.textStyle2}> Deadline</Text>
        <DatePicker
          style={{ width: 250 }}
          date={currentDate}
          mode='date'
          placeholder='select date'
          format='YYYY-MM-DD'
          minDate={todayDate}
          //minDate="2016-05-15"
          //maxDate="2016-06-01"
          confirmBtnText='Confirm'
          cancelBtnText='Cancel'
          allowFontScaling= {true}
          iconComponent= {<Icon name='calendar' size= {25}/>}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              right: 100,
              top: 4,
            },
            dateInput: {
              marginLeft: -10,
              marginRight: 15,
              borderColor: '#6280c1',
              borderWidth: 2.5,
            }
            
          }}
          onDateChange={date => {
            setCurrentDate(date);
          }}
        />
      </View>
      <View style={{ borderColor: '#6280c1', borderWidth: 2.5, padding: 5 }}>
        <Text style={styles.textStyle}> Difficulty </Text>
        <View style={{ padding: 10 }}>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={starRating}
            selectedStar={rating => {
              setStarRating(rating);
            }}
            halfStarEnabled={true}
            emptyStarColor={'#87acf4'}
            fullStarColor={'#87acf4'}
          />
        </View>
      </View>
      <View style={{ flexDirection: 'row', paddingTop: 10 }}>
        <Text style={styles.textStyle3}> This task will take about</Text>
        <TextInput
          style={styles.duration}
          placeholder={'0'}
          keyboardType={'numeric'}
          onChangeText={durationInputHandler}
          value={enteredDuration}
          textAlign={'center'}
        />
        <Text style={styles.textStyle3}>   min </Text>
      </View>
      <View style={{paddingTop: 10}}>
        <TextInput
          placeholder={"Optional Description"}
          numberOfLines={5}
          multiline={true}
          textAlignVertical={'top'}
          style={styles.description}
          onChangeText={descriptionInputHandler}
          value={enteredDescription}
        />
      </View>
      <View
        flex={1}
        justifyContent= {'flex-end'}
        marginBottom= {0}
        paddingTop={50}
        >
        <AddCancelButton
          onAddPress={() => {
            if(enteredTask == '') {
              Alert.alert('Please give your task a name!', 'Enter a name for your task before continuing.');
            }
            else {
              addTaskButtonPress(enteredTask, currentDate, starRating, enteredDescription, enteredDuration);
            }
          }}
          onCancelPress={cancelButtonPress}
        />
      </View>
    </ScrollView>
  );
}

AddTask.defaultProps = {

};

const styles = StyleSheet.create({
  screen: {
    padding: 30,
    height: '100%'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderColor: '#6280c1',
    borderWidth: 2.5,
    padding: 10,
    fontSize: 18
  },
  textStyle: {
    color: 'black',
    fontSize: 18,
    left: -5,
  },
  textStyle2: {
    color: 'black',
    fontSize: 18,
    left: -20,
    top: 7
  },
  textStyle3: {
    color: 'black',
    fontSize: 18,
    left: -5,
    top: 5
  },
  titleStyle: {
    fontSize: 40,
    color: '#eaabbe',
    alignSelf: 'center',
    paddingBottom: 10,
    fontWeight: 'bold'
  },
  duration: {
    width: '15%',
    borderColor: '#6280c1',
    borderWidth: 2.5
  },
  description: {
    width: '100%',
    height: 150,
    borderColor: '#6280c1',
    borderWidth: 2.5,
    padding: 10,
    fontSize: 18
  }
});

export default AddTask;
