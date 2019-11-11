import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { MONTHS, DAYS_OF_WEEK, getFullWeek } from '../utils';

class Calendar extends Component {
  isChosen = day => {
    const { chosenDate } = this.props;

    return (
      day.date === chosenDate.date() &&
      day.months === chosenDate.month() &&
      day.years === chosenDate.year()
    );
  };

  render() {
    const { chosenDate } = this.props;

    const daysInWeek = getFullWeek(chosenDate);

    return (
      <View style={styles.container}>
        <Text>Calendar</Text>
        <Text style={{ textAlign: 'center' }}>
          {MONTHS[chosenDate.month()]}
        </Text>
        <View style={styles.weekContainer}>
          {daysInWeek.map((day, i) => {
            return (
              <View key={day.date} style={styles.dayContainer}>
                <Text>{DAYS_OF_WEEK[i][0]}</Text>
                <View
                  style={{ backgroundColor: this.isChosen(day) ? 'red' : null }}
                >
                  <Text>{day.date}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 255, 0.5)'
  },

  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  dayContainer: {
    flexDirection: 'column'
  }
});

export default Calendar;
