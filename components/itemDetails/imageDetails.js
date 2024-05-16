import React, { useState, useRef } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const ImageDetails = ({ image, title, subTitle, rate }) => {
  const heartScale = useRef(new Animated.Value(1)).current;
  const [isLiked, setIsLiked] = useState(false);

  const animateHeart = () => {
    Animated.sequence([
      Animated.timing(heartScale, {
        toValue: 1.5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(heartScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    animateHeart();
  };
  return (
    <View style={styles.image}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
          resizeMode="cover"
        />

        <TouchableOpacity onPress={handleLike} style={styles.loveIcon}>
          <Animated.View style={{ transform: [{ scale: heartScale }] }}>
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              size={50}
              color={isLiked ? "#FF0000" : "#FFF"}
            />
          </Animated.View>
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <View style={styles.rating}>
          <Ionicons name="star" size={13} color={"white"}></Ionicons>
          <Text style={{ color: "white" }}>{rate}</Text>
        </View>

        <LinearGradient
          colors={[
            "rgba(0, 0, 0, -0.5)",
            "rgba(0, 0, 0, 0)",
            "rgba(0, 0, 0, 0.2)",
            "rgba(0, 0, 0, 0.4)",
            "rgba(0, 0, 0, 0.6)",
            "rgba(0, 0, 0, 0.8)",
            "rgba(0, 0, 0, 1)",
            "rgba(0, 0, 0, 1.5)",
          ]}
          style={styles.gradient}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: "relative",
    marginBottom: 20,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 400,
    borderRadius: 10,
  },
  title: {
    position: "absolute",
    width: 350,
    bottom: 120,
    left: 20,
    fontSize: 32,
    fontWeight: "bold",
    zIndex: 100,
    color: "#FFF",
  },
  subTitle: {
    position: "absolute",
    width: 350,
    bottom: 100,
    left: 20,
    fontSize: 14,
    zIndex: 100,
    color: "#FFF",
  },
  rating: {
    flexDirection: "row",
    position: "absolute",
    width: 50,
    bottom: 110,
    right: 20,
    zIndex: 100,
    backgroundColor: "#d9662d",
    borderRadius: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  loveIcon: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 100,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
});

export default ImageDetails;
