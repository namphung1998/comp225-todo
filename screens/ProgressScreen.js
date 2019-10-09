import React from 'react';
import { View, Text } from 'react-native';
import ProgressHeader from '../components/ProgressHeader';
import TaskList from '../components/TaskList';

function ProgressScreen() {
  return (
    <View style={styles.container}>
      <ProgressHeader
        numCompleted={1}
        numTotal={10}
      />
      <TaskList/>
    </View>
  );
}

const styles = {
  container: {
    paddingTop: 24
  }
}

export default ProgressScreen;
