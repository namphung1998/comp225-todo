import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import FloatingButton from './FloatingButton';

function TaskDetail({ item, onDelete, setDetailId }) {
    // const { id, completed, title, deadline, rating } = item;
    const onDeletePress = () => onDelete(item.id, () => setDetailId(null));

    return (
        <View style={styles.modalView}>
            <Text style={styles.titleView}>{item.title}</Text>
            <Text style={styles.descView}>{item.desc}</Text>
            <Text style={styles.durationView}>{"This task will take " + item.duration + " minutes."}</Text>

            <TouchableOpacity onPress={onDeletePress} style={styles.removeContainer}>
                <Text style={styles.textContainer}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    margin: 40,
    alignItems: 'center'
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
  },
  removeContainer: {
    height: 40,
    width: 100,
    borderRadius: 22,
    borderWidth: 1.25,
    borderColor: 'black',
    backgroundColor: 'pink',
    justifyContent: 'center',
    marginTop: 40
  },
  textContainer: {
    textAlign: 'center'
  }
})

export default TaskDetail;
