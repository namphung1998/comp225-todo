import React, { Component } from 'react';
import { View, Text, TextInput} from 'react-native';

function AddTask() {
  const [value, onChangeText] = React.useState("Enter Task Name Here")
  return(
    <View>
      <Text>This is working.</Text>
    </View>
  );
}

export default AddTask;
