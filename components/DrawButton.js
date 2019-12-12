import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function DrawButton({ onDrawPress }) {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onDrawPress} style={styles.container}>
        <Text>DRAW (500)</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 55,
    width: 120,
    borderRadius: 22,
    borderWidth: 1.25,
    borderColor: 'black',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10
  }
});

export default DrawButton;
