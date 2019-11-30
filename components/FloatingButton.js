import React from "react";
import { TouchableOpacity } from "react-native";

function FloatingButton(props) {
  return (
    <TouchableOpacity
      style={[styles.container, props.style]}
      onPress={props.onPress}
    >
      {props.children}
    </TouchableOpacity>
  );
}

const styles = {
  container: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    height: 72,
    width: 72,
    borderRadius: 36,
    backgroundColor: "#ffe599",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default FloatingButton;
