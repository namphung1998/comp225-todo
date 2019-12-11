import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TaskDetail({ item, onDelete }) {
    // const { id, completed, title, deadline, rating } = item;
    // const onDeletePress = () => onDelete(id);

    return (
        <View style={styles.modalView}>
            <Text style={styles.titleView}>{item.title}</Text>
            <Text style={styles.descView}>{item.desc}</Text>
            <Text style={styles.durationView}>{"This task will take " + item.duration + " minutes."}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  modalView: {
      backgroundColor: 'white',
      margin: 40,
  },
  titleView: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 12
  },
  descView: {
    fontSize: 16,
    textAlign: 'left',
    paddingBottom: 6
  },
  durationView: {
    fontSize: 16,
    textAlign: 'left'
  }
})

export default TaskDetail;
