import { useFonts } from "expo-font";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SearchBar from "../components/searchBar";
import Categories from "../components/categories";
import CoffeeCard from "../components/coffeeCard";

const Home = () => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Find the best Coffee for you</Text>
        <SearchBar></SearchBar>
        <Categories></Categories>
        <CoffeeCard></CoffeeCard>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#0c1013",
    padding: 50,
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontFamily: "PoppinsSemiBold",
    fontSize: 24,
    marginHorizontal: 45,
    marginTop: 60,
    marginBottom: 40,
    width: 200,
    textAlign: "left",
    letterSpacing: 0.9,
  },
});

export default Home;
