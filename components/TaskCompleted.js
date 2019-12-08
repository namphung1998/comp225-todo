import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Divider, CheckBox } from 'react-native-elements';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import BackIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome5';
import StarRating from 'react-native-star-rating';

import FloatingButton from './FloatingButton';

function TaskCompleted({ item, onCheckBoxToggle }) {
  const { id, completed, title, deadline, rating } = item;

  const onPress = () => onCheckBoxToggle(id);

  return (
    <TouchableOpacity style={styles.container}>
      <Card
        titleStyle={{ textAlign: 'left' }}
        containerStyle={styles.cardContainer}
        title={title}
        dividerStyle={{ display: 'none' }}
      >
        <FloatingButton onPress={onPress} style={styles.backButton}>
          <BackIcon name='back' size={16} />
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

      <View style={styles.fishContainer}>
        <MaterialIcon name='add' color='black' size={24} />
        <Text style={styles.count}>{rating*100}</Text>
        <Icon name='fish' color='#6280c1' size={24}/>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 16
  },

  cardContainer: {
    flex: 1,
    margin: 0,
    borderRadius: 10
  },

  starContainer: {
    width: '50%'
  },

  fishContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  count: {
    fontSize: 18,
    marginLeft: 3,
    marginRight: 6
  },

  backButton: {
    top: 1,
    right: 1,
    bottom: null,
    height: 16,
    width: 16,
    borderRadius: 32,
    backgroundColor: null
  }
});

export default TaskCompleted;
