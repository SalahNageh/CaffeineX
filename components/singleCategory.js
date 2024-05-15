import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

const SingleCategory = ({ categoryTitle }) => {
  const [clicked, setClicked] = useState(false);
  let [fontsLoaded, fontError] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <TouchableOpacity onPress={handleClick} style={styles.categoryComponent}>
      <Text style={[styles.textStyle, clicked && styles.clickedTextStyle]}>
        {categoryTitle}
      </Text>
      {clicked && <View style={styles.dot} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryComponent: {
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
  },
  textStyle: {
    color: "#fff",
    fontFamily: "PoppinsSemiBold",
  },
  clickedTextStyle: {
    color: "orange", // Change text color when clicked
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "orange",
    marginTop: 5, // Adjust spacing between text and dot
  },
});

export default SingleCategory;
