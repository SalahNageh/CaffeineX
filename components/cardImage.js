import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import the icon you want to use

const CardImage = ({ image, rate }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.overlay}>
        <Icon
          name="star"
          size={18}
          color="#D9662C"
          style={{
            alignSelf: "center",
            paddingRight: 7,
          }}
        />
        <Text
          style={{
            color: "white",
            alignSelf: "center",
          }}
        >
          {rate}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "75%",
    aspectRatio: 1,
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
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderBottomLeftRadius: 30,
    width: "50%",
    height: "20%",
  },
});

export default CardImage;
