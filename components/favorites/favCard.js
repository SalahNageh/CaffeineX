import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import { COLORS } from "../../utils/colors";

const FavCard = ({ item, setFav }) => {
  const renderRightActions = (progress, dragX) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [0, 0, 0, 1],
    });
    return (
      <TouchableOpacity
        onPress={() => {
          setFav((oldState) =>
            oldState.filter((coffee) => coffee.id != item.id)
          );
        }}
        style={styles.deleteButton}
      >
        <Animated.Text
          style={[
            styles.deleteButtonText,
            { transform: [{ translateX: trans }] },
          ]}
        >
          Remove from favorites
        </Animated.Text>
      </TouchableOpacity>
    );
  };

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableOpacity style={styles.card} activeOpacity={0.8}>
        <Image
          source={{ uri: item.image }}
          style={styles.poster}
          resizeMode="cover"
        />
        <View style={styles.details}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.overview} numberOfLines={3}>
            {item.overview}
          </Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: COLORS.secondaryDarkGreyHex,
    borderRadius: 10,
    marginBottom: 16,
    elevation: 3,
    height: 150,
  },
  poster: {
    width: 120,
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  details: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 8,
    color: "white",
  },
  overview: {
    fontFamily: "Poppins",
    fontSize: 14,
    color: "#999",
  },
  deleteButton: {
    backgroundColor: COLORS.primaryOrangeHex,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: 150,
  },
  deleteButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    width: 80,
    textAlign: "center",
    lineHeight: 20,
  },
});

export default FavCard;
