import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import StarRating from 'react-native-star-rating';

function TaskCompleted({ item }) {
  const { id, title, rating } = item;

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
    <View style={styles(this.props).container}>
      <Card
        titleStyle={{ textAlign: 'left' }}
        containerStyle={styles(cardColor()).cardContainer}
        title={title}
        dividerStyle={{ display: 'none' }}
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

      <View style={styles(this.props).fishContainer}>
        <MaterialIcon name='add' color='black' size={24} />
        <Text style={styles(this.props).count}>{rating*100}</Text>
        <Icon name='fish' color='#6280c1' size={24}/>
      </View>
    </View>
  );
}

const styles = (cardColor) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 16
  },

  cardContainer: {
    flex: 1,
    margin: 0,
    borderRadius: 10,
    backgroundColor: cardColor
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
