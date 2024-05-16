import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import FavCard from "../components/favorites/favCard";
import EmptyListAnimation from "../components/EmptyListAnimation";

const Favorites = () => {
  const favoriteMovies = [
    {
      id: 1,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG",
      title: "Cappuccino",
      overview: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s`,
    },
    {
      id: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG",
      title: "Cappuccino",
      overview: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s`,
    },
    {
      id: 3,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG",
      title: "Cappuccino",
      overview: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s`,
    },
    {
      id: 4,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG",
      title: "Cappuccino",
      overview: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s`,
    },
    {
      id: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG",
      title: "Cappuccino",
      overview: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s`,
    },
    {
      id: 6,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG",
      title: "SAsa",
      overview: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s`,
    },
  ];
  const [favCoffees, setFavCoffees] = useState(favoriteMovies);

  return favCoffees.length > 0 ? (
    <View style={styles.container}>
      <Text style={styles.titleF}>Your Watch List</Text>
      <FlatList
        data={favCoffees}
        renderItem={({ item }) => (
          <FavCard item={item} setFav={setFavCoffees} />
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  ) : (
    <EmptyListAnimation title={"Favorite List"}></EmptyListAnimation>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c1013",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#141E1D",
  },
  centeredText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  flatListContainer: {
    paddingBottom: 16,
  },
  titleF: {
    fontSize: 23,
    fontWeight: "bold",
    marginVertical: 20,
    color: "white",
  },
});

export default Favorites;
