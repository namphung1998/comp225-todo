import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

function TaskItem({item}) {
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={true}
        />
      </View>


      <View style={styles.textContainer}>
        <Text> {item.title} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // paddingTop: 50
  },

  checkboxContainer: {
    paddingLeft: 10,
    // fontSize: 18,
    // height: 44
  },

  textContainer: {
    marginLeft: 10,
    justifyContent: "center"
  }
});

export default TaskItem;
