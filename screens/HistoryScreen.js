import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TaskList from '../components/TaskList';
import TaskDetail from '../components/TaskDetail';

function HistoryScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.titleStyle}>
        History
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 36,
    color: '#eaabbe',
    alignSelf: 'center',
    padding: 10,
    fontWeight: 'bold'
  }
});


export default HistoryScreen;
