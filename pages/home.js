import { useFonts } from "expo-font";
import React, { useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import SearchBar from "../components/searchBar";
import Categories from "../components/categories";
import CoffeeCard from "../components/coffeeCard";
import ProductList from "../components/productList";
import { useDispatch, useSelector } from "react-redux";
import { fetchBeans, fetchDrinks } from "../redux/slices/product_slice";

const Home = () => {
  const drinks = useSelector((state) => state.products.filteredDrinks);
  const beans = useSelector((state) => state.products.beans);

  const dispatch = useDispatch();

  let [fontsLoaded, fontError] = useFonts({
    Poppins: require("../assets/fonts/Poppins-Medium.ttf"),
    PoppinsSemiBold: require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  useEffect(() => {
    dispatch(fetchDrinks());
    dispatch(fetchBeans());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Find the best Coffee for you</Text>
        <SearchBar></SearchBar>
        <Categories></Categories>
        <ProductList coffeeData={drinks}></ProductList>
        <Text
          style={[
            styles.title,
            { marginTop: 10, marginBottom: 5, color: "#52555A" },
          ]}
        >
          Coffee Beans
        </Text>
        <ProductList coffeeData={beans}></ProductList>
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
