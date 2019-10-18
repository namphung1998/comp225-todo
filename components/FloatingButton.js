import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function FloatingButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon name='add' color='white' size={24} />
      </View>
    </TouchableOpacity>
  );
}

const styles = {
  container: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    height: 72,
    width: 72,
    borderRadius: 144,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default FloatingButton;
