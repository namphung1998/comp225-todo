import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native';

function AddCancelButton({onAddPress, onCancelPress}) {
  return (
    <SafeAreaView style={styles.fixToText}>
      <TouchableOpacity onPress={onCancelPress} style={styles.buttonContainer}>
        <Text style={styles.textContainer}>Cancel</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onAddPress} style={styles.buttonContainer}>
        <Text style={styles.textContainer}>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>


    // <SafeAreaView>
    //   <View>
    //     <View style={styles.fixToText}>
    //       <Button
    //           title="CANCEL"
    //           color="gray"
              
    //           // color='black'
    //           onPress={onCancelPress}
    //       />
    //       <Button
    //         title="ADD TASK"
    //         color="gray"
    //         // color='black'
    //         onPress={() => {
    //           {/* Alert.alert('Your task is added!') */}
    //           onAddPress()
    //         }}
    //       />
    //     </View>
    //   </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottom: {
    //position: 'absolute',
    justifyContent: 'flex-end',
    marginBottom: 40,
    marginHorizontal: 40,
  },
  buttonContainer: {
    height: 50,
    width: 120,
    borderRadius: 22,
    borderWidth: 1.25,
    borderColor: 'black',
    backgroundColor: 'pink',
    justifyContent: 'center'
  },
  textContainer: {
    textAlign: 'center',
    fontSize: 16
  }
});

export default AddCancelButton;
