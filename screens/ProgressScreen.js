import React, { useState } from 'react';
import { View, Text, Button, Modal } from 'react-native';
import ProgressHeader from '../components/ProgressHeader';
import TaskList from '../components/TaskList';
import AddTask from './AddTask';

function ProgressScreen() {
  
  const [visible, setVisible] = useState(false);
  

  const addTaskButtonPress = () => {
    setVisible(!visible);
  }

  return (
    <View style={styles.container}>
      <ProgressHeader
        numCompleted={1}
        numTotal={10}
      />
      <Modal visible={visible}>
        <AddTask onPress={addTaskButtonPress}/>
      </Modal>
      <Button title="ADD TASK" onPress={addTaskButtonPress}/>
      <TaskList/>
    </View>
  );
}

const styles = {
  container: {
    paddingTop: 24
  }
}

export default ProgressScreen;
