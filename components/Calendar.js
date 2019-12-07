import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from 'moment';

import { MONTHS, DAYS_OF_WEEK, getFullWeek } from '../utils';

function Calendar({ chosenDate, setChosenDate, daysToShow }) {
  const isChosen = day => {
    return (
      day.date === chosenDate.date() &&
      day.months === chosenDate.month() &&
      day.years === chosenDate.year()
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.monthText}>{MONTHS[chosenDate.month()]}</Text>
      <View style={styles.weekContainer}>
        {daysToShow.map((day, i) => {
          return (
            <Day
              enabled={day.enabled}
              key={day.date}
              day={day}
              dayIndex={i}
              style={[
                styles.dateContainer,
                isChosen(day) ? styles.chosenContainer : null
              ]}
            />
          );
        })}
      </View>
    </View>
  );
}

function Day({ day, dayIndex, style, enabled }) {
  return (
    <View style={styles.dayContainer}>
      <Text>{DAYS_OF_WEEK[dayIndex][0]}</Text>
      <TouchableOpacity disabled={!enabled} style={style}>
        <Text style={styles.monthText}>{day.date}</Text>
      </TouchableOpacity>
      {enabled && <View style={styles.dot} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d8d7f4',
    paddingTop: 8,
    paddingBottom: 2
  },

  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16
  },

  dayContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },

  dateContainer: {
    marginTop: 6,
    height: 24,
    width: 24,
    borderRadius: 12,
    justifyContent: 'center'
  },

  chosenContainer: {
    borderColor: '#674ea7',
    borderWidth: 2
  },

  monthText: {
    textAlign: 'center',
    fontWeight: 'bold'
  },

  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#8e7cc3',
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 6,
  }
});

export default Calendar;
