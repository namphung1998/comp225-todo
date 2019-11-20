import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Divider, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StarRating from 'react-native-star-rating';

import DeleteButton from './DeleteButton';
// import CheckBox from './CheckBox';

function TaskItem({ item, onCheckBoxToggle, onDelete }) {
  const { id, completed, title, deadline, rating } = item;

  const onIconPress = () => onCheckBoxToggle(id);
  const onDeletePress = () => onDelete(id);

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          checked={completed}
          checkedColor='black'
          uncheckedColor='black'
          onPress={onIconPress}
        />
      </View>
      <Card
        titleStyle={{ textAlign: 'left' }}
        containerStyle={styles.cardContainer}
        title={title}
        dividerStyle={{ display: 'none' }}
      >
        <DeleteButton onPress={onDeletePress} style={styles.removeButton}>
          <Icon name='highlight-off' size={16} />
        </DeleteButton>
        <StarRating
          containerStyle={styles.starContainer}
          starSize={24}
          disabled={true}
          maxStars={5}
          rating={rating}
          halfStarEnabled={true}
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: '#00f',
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
