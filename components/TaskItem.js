import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox, Card } from 'react-native-elements';

function TaskItem({ item, onCheckBoxToggle }) {
  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={item.completed}
          onIconPress={() => onCheckBoxToggle(item.id)}
        />
      </View>
      <Card
        titleStyle={{ textAlign: 'left' }}
        containerStyle={styles.cardContainer}
        title={item.title}
        dividerStyle={{ display: 'none' }}
      >
        <Text>{item.deadline}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: '#00f',
    marginTop: 16,
    marginRight: 16
  },

  checkboxContainer: {
    paddingLeft: 10,
    alignSelf: 'center'
  },

  cardContainer: {
    flex: 1,
    margin: 0
  }
});

export default TaskItem;
