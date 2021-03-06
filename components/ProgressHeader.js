import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ProgressBar from './ProgressBar';

function ProgressHeader({ numCompleted, numTotal, numHearts }) {
  const width = numTotal === 0 ? 0 : numCompleted * 100 / numTotal;

  return (
    <View style={styles.container}>
      <View style={styles.fishContainer}>
        <Icon name='fish' color='#6280c1' size={30}/>
        <Text style={styles.count}>{numHearts}</Text>
      </View>
        <ProgressBar
          width={width}
          numCompleted={numCompleted}
          numTotal={numTotal}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#f2f2f2',
    marginTop: Platform.OS === 'android' ? 24 : null
  },

  fishContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  count: {
    textAlignVertical: 'center', 
    fontSize: 15,
    marginLeft: 8
  }
})

export default ProgressHeader;
