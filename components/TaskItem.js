import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CheckBox, Card } from 'react-native-elements';

import FloatingButton from './FloatingButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

function TaskItem({ item, onCheckBoxToggle, onDelete }) {
  const { id, completed, title, deadline } = item;

  const onIconPress = () => onCheckBoxToggle(id);
  const onDeletePress = () => onDelete(id);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          checkedColor='pink'
          checked={completed}
          onPress={onIconPress}
        />
      </View>
      <Card
        titleStyle={{ textAlign: 'left' }}
        containerStyle={styles.cardContainer}
        title={title}
        dividerStyle={{ display: 'none' }}
      >
        <FloatingButton onPress={onDeletePress} style={styles.removeButton}>
          <Icon name='highlight-off' size={16} />
        </FloatingButton>
        <Text>{deadline}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: '#00f',
    marginTop: 16,
    marginRight: 16,
  },

  checkboxContainer: {
    paddingLeft: 10,
    alignSelf: 'center',
  },

  cardContainer: {
    flex: 1,
    margin: 0
  },

  removeButton: {
    top: 1,
    right: 1,
    bottom: null,
    height: 16,
    width: 16,
    borderRadius: 32,
    backgroundColor: null
  }
});

export default TaskItem;
