import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProgressScreen from './screens/ProgressScreen';

export default function App() {
  return (
    <View>
      <ProgressScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
