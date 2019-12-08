import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function DrawButton({ onDrawPress }) {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onDrawPress} style={styles.container}>
        <Text>Draw</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: 120,
    borderRadius: 22,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  }
});

export default DrawButton;
