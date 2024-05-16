import React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";

const SizeBtn = ({ size, isSelected, onSelect }) => {
  return (
    <Pressable onPress={onSelect}>
      <View
        style={[
          styles.sizeBtn,
          { backgroundColor: isSelected ? "#d9662d" : "grey" },
        ]}
      >
        <Text style={{ color: isSelected ? "white" : "black" }}>{size}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  sizeBtn: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
});

export default SizeBtn;
