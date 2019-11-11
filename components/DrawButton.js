import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';


function DrawButton({onDrawPress}) {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.fixToText}>
        <Button
            title="Draw"
            color="#ffc0cb"
            onPress={onDrawPress}
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
    //position: 'absolute',
    justifyContent: 'center',
    marginBottom: 40,
    marginHorizontal: 40,
  }
});



export default DrawButton;
