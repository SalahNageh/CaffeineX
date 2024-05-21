import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../redux/slices/product_slice";

const SingleCategory = ({ categoryTitle }) => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(
    (state) => state.products.selectedCategory
  );

  const [fontsLoaded, fontError] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  const handleClick = () => {
    dispatch(setSelectedCategory(categoryTitle));
  };

  return (
    <TouchableOpacity
      onPress={handleClick}
      style={[
        styles.categoryComponent,
        selectedCategory === categoryTitle && styles.selectedCategory,
      ]}
    >
      <Text
        style={[
          styles.textStyle,
          selectedCategory === categoryTitle && styles.clickedTextStyle,
        ]}
      >
        {categoryTitle}
      </Text>
      {selectedCategory === categoryTitle && <View style={styles.dot} />}
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
    color: "orange",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "orange",
    marginTop: 5,
  },
});

export default SingleCategory;
