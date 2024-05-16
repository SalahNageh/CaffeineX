import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const SubmitBtn = ({ itemPrice }) => {
  return (
    <Pressable>
      <View style={styles.submit}>
        <Text style={[styles.submitTxt, { marginHorizontal: 40 }]}>
          Add to cart
        </Text>
        <View style={styles.verticalLine}></View>
        <Text style={styles.submitTxt}>$ {itemPrice}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  verticalLine: {
    height: "50%",
    width: 2,
    backgroundColor: "white",
    marginRight: 15,
  },
  submit: {
    backgroundColor: "#d9662d",
    width: "80%",
    margin: "auto",
    marginTop: 30,
    height: "25%",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  submitTxt: { color: "white", fontSize: 18, fontWeight: "bold" },
});

export default SubmitBtn;
