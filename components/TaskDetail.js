import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import FloatingButton from './FloatingButton';

function TaskDetail({ item, onDelete, setDetailId }) {
    // const { id, completed, title, deadline, rating } = item;
    const onDeletePress = () => onDelete(item.id, () => setDetailId(null));

    return (
        <View style={styles.modalView}>
            <Text style={styles.titleView}>{item.title}</Text>
            <Text style={styles.descView}>{item.desc}</Text>
            <Text style={styles.durationView}>{"This task will take " + item.duration + " minutes."}</Text>

            <Button style={styles.removeButton}
                title="Delete"
                color="#ffc0cb"
                onPress={onDeletePress}
            />
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
