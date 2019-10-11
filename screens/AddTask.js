import React, { Component } from 'react';
import { View, Text, TextInput} from 'react-native';

function AddTask() {
  const [value, onChangeText] = React.useState("Enter Task Name Here")
  return(
    <View
      <Text>This is working.</Text>
     //  style={{
     //    backgroundColor: value
     //    borderBottomColor: 'pink',
     //    borderBottomWidth: 1
     //  }} >
     // <TextInput
     //    style={{ height: 40, borderColor: 'pink', borderWidth: 1}}
     //    onChangeText={text => onChangeText(text)}
     //    value={value}
     //  />
    </View>
    <View>
      <AddCancelButton/>
    </View>
  );
}

export default AddTask;
