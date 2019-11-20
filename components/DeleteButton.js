import React from "react";
import { View, TouchableOpacity } from "react-native";

function DeleteButton(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}
    >
      <View>{props.children}</View>
    </TouchableOpacity>
  );
}

const styles = {
  container: {
    position: "absolute",
    bottom: 24,
    right: 24,
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default DeleteButton;
