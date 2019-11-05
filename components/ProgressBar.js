import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

function ProgressBar({ numCompleted, numTotal, width }) {
  const widthStyle = width.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp'
  });

  return (
    <View>
      <View style={styles.bar}>
        <Text>{`${numCompleted}/${numTotal}`}</Text>
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            styles.progress,
            { width: widthStyle }
          ]}
        ></Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    marginRight: 16,
    marginBottom: 16,
    height: 16,
    width: 150,
    borderWidth: 1
  },

  progress: {
    backgroundColor: 'blue'
  }
});

export default ProgressBar;
