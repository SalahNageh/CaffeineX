import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import the icon you want to use

const CardImage = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG",
        }}
        style={styles.image}
      />
      <View style={styles.overlay}>
        {/* Your star icon and rating component here */}
        {/* Example: */}
        <Icon name="star" size={20} color="#D17842" />
        <Text
          style={{
            color: "white",
          }}
        >
          {" "}
          4.5
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "75%",
    height: "60%",
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 20,
    alignSelf: "center",
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderBottomLeftRadius: 30,

    width: "50%",
    height: "25%",
  },
});

export default CardImage;
