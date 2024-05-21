import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CardImage from "./cardImage";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
const CoffeeCard = ({ name, description, price, image, rate }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#11161a", "transperant"]}
        start={[0, 1]}
        end={[1, 0]}
        style={styles.gradient}
      />
      <CardImage image={image} rate={rate}></CardImage>
      <View style={styles.infoContainer}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text numberOfLines={3} style={styles.description}>
          {description}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginLeft: "16%",
          marginTop: 20,
        }}
      >
        <Text style={styles.currency}>$</Text>
        <Text style={styles.price}>{price}</Text>
      </View>

      <View style={styles.addButton}>
        <TouchableOpacity>
          <AntDesign name="plus" size={18} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    aspectRatio: 0.6,
    backgroundColor: "#11161a",
    borderRadius: 30,
    marginVertical: 20,
    marginRight: 20,
    overflow: "hidden",
  },
  gradient: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 200,
    height: 200,
  },
  name: {
    color: "white",
    fontFamily: "Poppins",
    marginVertical: 5,
    fontSize: 20,
    paddingRight: 10,
  },
  description: {
    color: "white",
    fontFamily: "Poppins",
    fontSize: 12,
  },
  infoContainer: {
    marginLeft: "14%",
  },
  price: {
    color: "white",
    fontFamily: "Poppins",
    fontSize: 18,
    marginLeft: "7%",
    position: "absolute",
    bottom: -15,
    left: 0,
  },

  currency: {
    color: "#D9662C",
    fontFamily: "Poppins",
    fontSize: 16,
    marginTop: 1,
    marginLeft: "7%",
    bottom: -15,
    left: -15,
  },
  addButton: {
    position: "absolute",
    bottom: 15,
    right: 15,
    backgroundColor: "#D9662C",
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CoffeeCard;
