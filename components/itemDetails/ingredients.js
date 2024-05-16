import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IconIonicons from "react-native-vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Ingredients = ({ main, flavor, roast }) => {
  return (
    <View style={styles.ingredients}>
      <View style={styles.content}>
        <MaterialIcons name="coffee" size={16} color="#d9662d"></MaterialIcons>
        <Text style={styles.txt}>{main}</Text>
      </View>
      <View style={styles.verticalLine}></View>
      <View style={styles.content}>
        <IconIonicons name="water-sharp" size={16} color="#d9662d" />
        <Text style={[styles.txt, { marginLeft: 0 }]}>{flavor}</Text>
      </View>
      <View style={styles.verticalLine}></View>
      <View style={styles.content}>
        <FontAwesome5 name="fire" size={14} color="#d9662d" />
        <Text style={styles.txt}>{roast}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ingredients: {
    backgroundColor: "#dbd9d9",
    width: "80%",
    height: "7%",
    borderRadius: 20,
    marginHorizontal: "auto",
    marginTop: "10%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  verticalLine: {
    height: "50%",
    width: 2,
    backgroundColor: "black",
  },
  txt: {
    fontSize: 12,
    marginLeft: 4,
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Ingredients;
