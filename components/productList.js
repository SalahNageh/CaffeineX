import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CoffeeCard from "./coffeeCard";

const ProductList = ({ coffeeData }) => {
  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={coffeeData}
      renderItem={({ item }) => (
        <CoffeeCard
          name={item.name}
          description={item.description}
          price={item.price}
          image={item.image}
          rate={item.rate}
        ></CoffeeCard>
      )}
      style={{ marginLeft: 30 }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({});

export default ProductList;
