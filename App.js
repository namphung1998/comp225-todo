import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import ProgressScreen from './screens/ProgressScreen';

import * as Font from 'expo-font';

export default class App extends Component {
  state = {
    loaded: false
  };

  componentDidMount() {
    Font.loadAsync({
      'gloria-hallelujah-regular': require('./assets/fonts/Gloria_Hallelujah/GloriaHallelujah-Regular.ttf')
    })
      .then(() => {
        this.setState({ loaded: true })
      });
  }

  render() {
    if (!this.state.loaded) {
      console.log('hello')
      return <ActivityIndicator />
    }
    console.log('done')
    return (
      <View>
        <ProgressScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
