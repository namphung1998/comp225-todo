import React from 'react';
import { View, Text } from 'react-native';

function TaskList() {
  return (
    <View style={styles.container}>
      <Text>TaskList</Text>
    </View>
  );
}

const styles = {
  container: {
    paddingTop: 24
  }
}

export default TaskList;
