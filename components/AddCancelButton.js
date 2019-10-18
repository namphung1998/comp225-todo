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

function AddCancelButton({onPress}) {
  return (
    <SafeAreaView style={styles.bottom}>
      <View>
        <View style={styles.fixToText}>
          <Button
            title="Add"
            onPress={() => {
              Alert.alert('Your task is added!')
              onPress()
            }}
          />
          <Button
            title="Cancel"
            onPress={onPress}
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
    position: 'absolute',
    justifyContent: 'flex-end',
    marginBottom: 40,
    marginHorizontal: 40,
  }
  // #ffc0cb
});

export default AddCancelButton;
