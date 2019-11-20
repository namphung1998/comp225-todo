import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


function DrawButton({onDrawPress}) {
  return (
    // <SafeAreaView>
        <TouchableOpacity 
          onPress={onDrawPress}
          style={[styles.container]}>
            <Text>
              Draw
            </Text>
          </TouchableOpacity>
    // </SafeAreaView>
  );
}

const styles = {
  container: {
    bottom: 45,
    height: 55,
    width: 120,
    borderRadius: 22,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default DrawButton;