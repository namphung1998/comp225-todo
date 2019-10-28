import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

function AddCancelButton({onAddPress, onCancelPress}) {
  return (
    <SafeAreaView style={styles.bottom}>
      <View>
        <View style={styles.fixToText}>
          <Button
            title="Add"
            color="#ffc0cb"
            onPress={() => {
              {/* Alert.alert('Your task is added!') */}
              onAddPress()
            }}
          />
          <Button
            title="Cancel"
            color="#ffc0cb"
            onPress={onCancelPress}
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
});

export default AddCancelButton;
