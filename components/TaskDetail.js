import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function TaskDetail({ item, onDelete }) {
    // const { id, completed, title, deadline, rating } = item;
    // const onDeletePress = () => onDelete(id);

    return (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.desc}</Text>
            <Text>{item.duration}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: "white",
        margin: 40,
       },
})

export default TaskDetail;
