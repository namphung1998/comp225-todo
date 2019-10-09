import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

function TaskList() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Task1'},
            {key: 'Task2'},
            {key: 'Task3'},
            {key: 'Task4'},
            {key: 'Task5'},
            {key: 'Task6'},
            {key: 'Task7'},
            {key: 'Task8'},
            {key: 'Task9'},
            {key: 'Task10'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})



// function TaskList() {
//   return (
//     <View style={styles.container}>
//       <Text>TaskList</Text>
//     </View>
//   );
// }
//
// const styles = {
//   container: {
//     paddingTop: 24
//   }
// }

export default TaskList;
