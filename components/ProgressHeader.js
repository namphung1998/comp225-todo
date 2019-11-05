import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProgressBar from './ProgressBar';

function ProgressHeader({ numCompleted, numTotal, numHearts }) {
  const width = new Animated.Value(numTotal === 0 ? 0 : numCompleted * 100 / numTotal)

  return (
    <View style={styles.container}>
      <View style={styles.heartContainer}>
        <Icon name='favorite' color='#ff0'/>
      <Text>{numHearts}</Text>
      </View>
        <ProgressBar 
          width={width}
          numCompleted={numCompleted}
          numTotal={numTotal}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    // backgroundColor: 'rgba(255, 0, 0, 0.2)',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#f2f2f2'
  },

  heartContainer: {
    flexDirection: 'row'
  }
})

export default ProgressHeader;
