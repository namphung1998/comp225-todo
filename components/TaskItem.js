import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Divider, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StarRating from 'react-native-star-rating';

import FloatingButton from './FloatingButton';

function TaskItem({ item, onCheckBoxToggle, onDelete, onPress }) {
  const { id, completed, title, deadline, rating } = item;

  const onIconPress = () => onCheckBoxToggle(id);
  const onDeletePress = () => onDelete(id);
  const onItemPress = () => onPress(id);

  return (
    <TouchableOpacity onPress={onItemPress} style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={completed}
          checkedColor='black'
          uncheckedColor='black'
          onPress={onIconPress}
        />
      </View>
      <Card
        titleStyle={styles.cardTitle}
        containerStyle={styles.cardContainer}
        title={title}
        dividerStyle={styles.divider}
      >
        <FloatingButton onPress={onDeletePress} style={styles.removeButton}>
          <Icon name='highlight-off' size={16} />
        </FloatingButton>
        <StarRating
          containerStyle={styles.starContainer}
          starSize={24}
          disabled={true}
          maxStars={5}
          rating={rating}
          halfStarEnabled={true}
        />
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 16,
    marginRight: 16
  },

  checkboxContainer: {
    paddingLeft: 6,
    paddingRight: 6,
    alignSelf: 'center'
  },

  cardContainer: {
    flex: 1,
    margin: 0,
    borderRadius: 10
  },
  cardTitle: {
    textAlign: 'left'
  },
  divider: {
    display: 'none'
  },

  removeButton: {
    top: 1,
    right: 1,
    bottom: null,
    height: 16,
    width: 16,
    borderRadius: 32,
    backgroundColor: null
  },

  starContainer: {
    width: '50%'
  }
});

export default TaskItem;
