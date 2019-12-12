import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, CheckBox } from 'react-native-elements';
import StarRating from 'react-native-star-rating';

function TaskItem({ item, onCheckBoxToggle, onPress }) {
  const { id, completed, title, rating } = item;

  const onIconPress = () => onCheckBoxToggle(id);
  const onItemPress = () => onPress(id);
  
  const cardColor = () => {
    if (item.rating <= 2) {
        return '#bbe1e8'
    } else if (item.rating <= 3.5) {
        return '#f4cbd9'
    } else {
        return '#ffcdc8'
    }
  }

  return (
    <TouchableOpacity onPress={onItemPress} style={styles(this.props).container}>
      <View style={styles(this.props).checkboxContainer}>
        <CheckBox
          checked={completed}
          checkedColor='black'
          uncheckedColor='black'
          onPress={onIconPress}
        />
      </View>
      <Card
        titleStyle={styles(this.props).cardTitle}
        containerStyle={styles(cardColor()).cardContainer}
        title={title}
        dividerStyle={styles(this.props).divider}
      >
        <StarRating
          containerStyle={styles(this.props).starContainer}
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

const styles = (cardColor) => StyleSheet.create({
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
    borderRadius: 10,
    backgroundColor: cardColor
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
