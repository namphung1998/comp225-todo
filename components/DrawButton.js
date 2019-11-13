import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';


function DrawButton({onDrawPress}) {
  return (
    <SafeAreaView>
      <View>
        <View style={[styles.container]}>
        <Button
            title="Draw"
            onPress={onDrawPress}
          />
        </View>
      </View>
    </SafeAreaView>
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