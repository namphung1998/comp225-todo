import React, { useRef }  from 'react';
import { View, Text, Modal, StyleSheet, SectionList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import TaskCompleted from '../components/TaskCompleted';
import TaskDetail from '../components/TaskDetail';

function HistoryScreen(tasksByDate) {
  const listRef = useRef(null);

  const data = Object.keys(tasksByDate).map(date => {
    return { title: date, data: tasksByDate[date] };
  });

  const keyExtractor = item => String(item.id);

  const renderItem = ({ item: task }) => (
    <TaskCompleted
      key={task.id}
      item={task}
      onPress={onPress}
    />
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.titleStyle}>
        History
      </Text>

      <SectionList
        ref={listRef}
        sections={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
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
