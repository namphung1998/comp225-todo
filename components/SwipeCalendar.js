import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { DAYS_OF_WEEK } from '../utils';

function SwipeCalendar({ daysToShow }) {
  return (
    <View style={styles.container}>
      <Text style={styles.monthText}>December</Text>
      <View style={styles.weekContainer}>
        {daysToShow.map((day, i) => {
          return (
            <View key={day.date} style={styles.dayContainer}>
              <Text>{DAYS_OF_WEEK[i][0]}</Text>
            </View>
          )
        })}
      </View>
      
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
  },

  noDot: {
    height: 8,
    width: 8,
    marginTop: 6,
  }
});

export default SwipeCalendar;
