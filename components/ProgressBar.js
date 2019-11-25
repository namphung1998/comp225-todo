import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

function ProgressBar({ numCompleted, numTotal, width }) {
  let animation = useRef(new Animated.Value(0));

  const widthStyle = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp'
  });

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: width,
      duration: 250
    }).start();
  }, [width]);

  return (
    <View>
      <View style={styles.bar}>
        <Text style={styles.progressText}>{`${numCompleted}/${numTotal}`}</Text>
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
<<<<<<< Updated upstream
    backgroundColor: '#f9cb9c'
  },

  progressText: {
    textAlign: 'center',
    zIndex: 1
=======
    backgroundColor: 'pink'
>>>>>>> Stashed changes
  }
});

export default ProgressBar;
