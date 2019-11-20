import React from "react";
import { View, TouchableOpacity } from "react-native";

function FloatingButton(props) {
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
    backgroundColor: "#ffe599",
    borderColor: 'black',
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center"
  }
};

export default FloatingButton;
