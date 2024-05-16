import { useFonts } from "expo-font";
import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SearchBar from "../components/searchBar";
import Categories from "../components/categories";
import CoffeeCard from "../components/coffeeCard";
import ProductList from "../components/productList";

const Home = () => {
  let [fontsLoaded, fontError] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });
  const coffeeData = [
    {
      name: "Latte",
      description: "With Steamed Milk",
      price: 13.99,
      rate: 4.5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG",
    },
    {
      name: "Cappuccino",
      description: "With Steamed Milk",
      price: 13.99,
      rate: 4.5,

      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG",
    },
    {
      name: "Espresso",
      description: "With Steamed Milk",
      price: 13.99,
      rate: 4.5,

      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG",
    },
    {
      name: "Americano",
      description: "With Steamed Milk",
      price: 13.99,
      rate: 4.5,

      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG",
    },
  ];
  const coffeeBeans = [
    {
      name: "Latte",
      description: "With Steamed Milk",
      price: 13.99,
      rate: 4.5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG",
    },
    {
      name: "Cappuccino",
      description: "With Steamed Milk",
      price: 13.99,
      rate: 4.5,

      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG",
    },
    {
      name: "Espresso",
      description: "With Steamed Milk",
      price: 13.99,
      rate: 4.5,

      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG",
    },
    {
      name: "Americano",
      description: "With Steamed Milk",
      price: 13.99,
      rate: 4.5,

      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Find the best Coffee for you</Text>
        <SearchBar></SearchBar>
        <Categories></Categories>
        <ProductList coffeeData={coffeeData}></ProductList>
        <Text
          style={[
            styles.title,
            { marginTop: 10, marginBottom: 5, color: "#52555A" },
          ]}
        >
          Coffee Beans
        </Text>
        <ProductList coffeeData={coffeeBeans}></ProductList>
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
    marginHorizontal: 35,
    marginTop: 60,
    marginBottom: 40,
    width: 200,
    textAlign: "left",
    letterSpacing: 0.9,
  },
});

export default Home;
