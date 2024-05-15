import { useFonts } from "expo-font";
import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-ico-modern-ui";
import { IconButton, TextInput } from "react-native-paper";

const SearchBar = () => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });
  return (
    <View style={styles.searchBar}>
      <IconButton icon="magnify" color="#000" size={24} onPress={() => {}} />

      <TextInput
        style={styles.textInputStyle}
        placeholder="Find your coffee.."
        placeholderTextColor={"gray"}
        textColor="white"
        underlineColor="transparent"
        contentStyle={{
          fontFamily: "Poppins",
          paddingVertical: 7,
          height: 50,
          paddingHorizontal: 20,
        }}
        activeUnderlineColor="transparent"
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    alignSelf: "center",
    backgroundColor: "#11161a",
    shadowOpacity: 0,
    borderRadius: 15,
  },
  textInputStyle: {
    backgroundColor: "#11161a",
    borderBottomColor: "transparent",
    fontFamily: "Poppins",
    paddingVertical: 7,
    height: 50,
    paddingHorizontal: 20,
  },
});

export default SearchBar;
