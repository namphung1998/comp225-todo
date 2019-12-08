import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';

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

export default TaskDetail;
