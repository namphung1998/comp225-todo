import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />;
}

export default function App() {
  return (
    <SafeAreaView style={styles.bottom}>
      <View>
        <View style={styles.fixToText}>
          <Button
            title="Add"
            onPress={() => Alert.alert('Your task is added!')}
          />
          <Button
            title="Cancel"
            onPress={() => Alert.alert('Are you SURE??')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 40,
    marginHorizontal: 40,
  }
});

export default AddCancelButton;
