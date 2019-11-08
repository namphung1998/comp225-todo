import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function CheckBox({ checked, onPress }) {
  const name = checked ? 'favorite' : 'favorite-border'

  return (
    <Icon name={name} color='#f5d442' size={24} onPress={onPress}/>
  );
}

export default CheckBox;
