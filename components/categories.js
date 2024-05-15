import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SingleCategory from "./singleCategory";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        margin: 10,
        marginLeft: 28,
      }}
    >
      <SingleCategory categoryTitle="All" />
      <SingleCategory categoryTitle="Espresso" />
      <SingleCategory categoryTitle="Latte" />
      <SingleCategory categoryTitle="Cappuccino" />
      <SingleCategory categoryTitle="Mocha" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default Categories;
