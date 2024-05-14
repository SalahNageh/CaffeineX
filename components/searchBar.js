import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-ico-modern-ui";
import { IconButton, TextInput } from "react-native-paper";

const SearchBar = () => {
  return (
    <View style={styles.searchBar}>
      <IconButton icon="magnify" color="#000" size={24} onPress={() => {}} />

      <TextInput
        style={styles.textInputStyle}
        placeholder="Find your coffee.."
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
    flex: 1,
    borderRadius: 15,
    backgroundColor: "#11161a",
    borderBottomColor: "#11161a",

    height: 50,
    paddingHorizontal: 20,
  },
});

export default SearchBar;
