import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function CheckBox({ checked, onPress }) {
  const color = checked ? '#ff0' : null;
  const name = checked ? 'favorite' : 'favorite-border'

  return (
    <Icon name={name} color={color} size={24} onPress={onPress}/>
  );
}

export default CheckBox;
