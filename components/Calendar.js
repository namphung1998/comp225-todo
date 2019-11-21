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
        <Text style={{ textAlign: 'center' }}>
          {MONTHS[chosenDate.month()]}
        </Text>
        <View style={styles.weekContainer}>
          {daysInWeek.map((day, i) => {
            return (
              <View key={day.date} style={styles.dayContainer}>
                <Text>{DAYS_OF_WEEK[i][0]}</Text>
                <View
                  style={[
                    styles.dateContainer,
                    this.isChosen(day) ? styles.chosenContainer : null
                  ]}
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
    backgroundColor: '#d8d7f4',
    padding: 16
  },

  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  dayContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  },

  dateContainer: {
    marginTop: 6,
    borderRadius: 10
  },

  chosenContainer: {
    borderWidth: 2,
    borderColor: '#674ea7'
  }
});

export default Calendar;
