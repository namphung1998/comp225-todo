import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Divider, CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StarRating from 'react-native-star-rating';

function TaskCompleted({ item }) {
  const { id, completed, title, deadline, rating } = item;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Card
        titleStyle={{ textAlign: 'left' }}
        containerStyle={styles.cardContainer}
        title={title}
        dividerStyle={{ display: 'none' }}
      >
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
        <Icon name='add' color='black' size={40} />
        <Text style={styles.count}>{numHearts}</Text>
        <Icon name='fish' color='#6280c1' size={30}/>
      </View>
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

  cardContainer: {
    flex: 1,
    margin: 0,
    borderRadius: 10
  },

  starContainer: {
    width: '50%'
  }
});

export default TaskCompleted;
