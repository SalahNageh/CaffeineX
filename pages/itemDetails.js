import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SizeBtn from "../components/itemDetails/sizeBtn";
import SubmitBtn from "../components/itemDetails/submitBtn";
import Ingredients from "../components/itemDetails/ingredients";
import ImageDetails from "../components/itemDetails/imageDetails";

const ItemDetails = () => {
  const [selectedSize, setSelectedSize] = useState("Small");

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <View style={styles.container}>
      <ImageDetails
        image={
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/1280px-A_small_cup_of_coffee.JPG"
        }
        title={"Cappuccino"}
        subTitle={"with Caramel"}
        rate={4.7}
      ></ImageDetails>
      <View>
        <View style={styles.details}>
          <Ingredients
            main={"Coffee"}
            flavor={"Caramel"}
            roast={"Medium roasted"}
          ></Ingredients>
          <Text style={styles.header}>Size</Text>
          <View style={styles.sizes}>
            <SizeBtn
              size={"Small"}
              isSelected={selectedSize === "Small"}
              onSelect={() => handleSizeSelect("Small")}
            ></SizeBtn>
            <SizeBtn
              size={"Medium"}
              isSelected={selectedSize === "Medium"}
              onSelect={() => handleSizeSelect("Medium")}
            ></SizeBtn>
            <SizeBtn
              size={"Large"}
              isSelected={selectedSize === "Large"}
              onSelect={() => handleSizeSelect("Large")}
            ></SizeBtn>
          </View>
          <Text style={styles.header}>About</Text>
          <Text style={styles.about}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </Text>
          <View style={styles.submitBtn}>
            <SubmitBtn itemPrice={16.5}></SubmitBtn>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  details: {
    backgroundColor: "#0c1013",
    height: "100%",
    marginTop: -70,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  header: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 40,
    fontSize: 20,
    marginVertical: 30,
  },
  sizes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: -25,
  },
  about: {
    color: "white",
    marginHorizontal: 40,
    marginTop: -25,
  },
  submitBtn: {
    position: "absolute",
    bottom: -330,
    height: "100%",
    width: "100%",
  },
});

export default ItemDetails;
