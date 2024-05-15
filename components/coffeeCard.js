import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CardImage from "./cardImage";

const CoffeeCard = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#11161a", "transperant"]}
        start={[0, 1]}
        end={[1, 0]}
        style={styles.gradient}
      />
      <CardImage></CardImage>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 250,
    backgroundColor: "#11161a",
    borderRadius: 40,
    marginLeft: 40,
    margin: 20,
    overflow: "hidden",
    position: "relative",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 200,
    height: 200,
    borderRadius: 40,
  },
});

export default CoffeeCard;
