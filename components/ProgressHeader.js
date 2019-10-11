import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

function ProgressHeader({ numCompleted, numTotal }) {
  return (
    <View>
      <Header
        placement='left'
        leftComponent={{
          text: 'PROGRESS'
        }}
        rightComponent={{ text: `${numCompleted}/${numTotal}` }}
      />
    </View>
  );
}

export default ProgressHeader;
