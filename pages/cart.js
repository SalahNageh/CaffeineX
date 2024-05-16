import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Pressable } from "react-native";
import { Card, Text } from "react-native-paper";

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#0c1013" }}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.cardsContainer}>
          <Card style={styles.card} elevation={5}>
            <View style={styles.cardContent}>
              <Card.Cover
                source={{
                  uri: "https://images.unsplash.com/photo-1608070734668-e74dc3dda037?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                style={styles.cardCover}
              />
              <View style={styles.content}>
                <Text variant="titleLarge" style={styles.title}>
                  Coffee{" "}
                </Text>
                <Text variant="bodyMedium" style={styles.description}>
                  Small Description
                </Text>
                <View style={styles.priceRow}>
                  <Text variant="bodyMedium" style={styles.size}>
                    L
                  </Text>
                  <View style={styles.priceContainer}>
                    <Text variant="bodyMedium" style={styles.dollar}>
                      $
                    </Text>
                    <Text variant="bodyMedium" style={styles.priceValue}>
                      3.15
                    </Text>
                  </View>
                </View>
                <View style={styles.buttonsRow}>
                  <Pressable onPress={decreaseQuantity} style={styles.button}>
                    <Text style={styles.buttonLabel}>-</Text>
                  </Pressable>
                  <View style={styles.numberContainer}>
                    <Text variant="bodyMedium" style={styles.number}>
                      {quantity}
                    </Text>
                  </View>
                  <Pressable onPress={increaseQuantity} style={styles.button}>
                    <Text style={styles.buttonLabel}>+</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card} elevation={5}>
            <View style={styles.cardContent}>
              <Card.Cover
                source={{
                  uri: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                style={styles.cardCover}
              />
              <View style={styles.content}>
                <Text variant="titleLarge" style={styles.title}>
                  Flat
                </Text>
                <Text variant="bodyMedium" style={styles.description}>
                  Small Description
                </Text>
                <View style={styles.priceRow}>
                  <Text variant="bodyMedium" style={styles.size}>
                    M
                  </Text>
                  <View style={styles.priceContainer}>
                    <Text variant="bodyMedium" style={styles.dollar}>
                      $
                    </Text>
                    <Text variant="bodyMedium" style={styles.priceValue}>
                      3.15
                    </Text>
                  </View>
                </View>
                <View style={styles.buttonsRow}>
                  <Pressable onPress={decreaseQuantity} style={styles.button}>
                    <Text style={styles.buttonLabel}>-</Text>
                  </Pressable>
                  <View style={styles.numberContainer}>
                    <Text variant="bodyMedium" style={styles.number}>
                      {quantity}
                    </Text>
                  </View>
                  <Pressable onPress={increaseQuantity} style={styles.button}>
                    <Text style={styles.buttonLabel}>+</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Card>
          <Card style={styles.card} elevation={5}>
            <View style={styles.cardContent}>
              <Card.Cover
                source={{
                  uri: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                style={styles.cardCover}
              />
              <View style={styles.content}>
                <Text variant="titleLarge" style={styles.title}>
                  Coffee Title
                </Text>
                <Text variant="bodyMedium" style={styles.description}>
                  Small Description
                </Text>
                <View style={styles.priceRow}>
                  <Text variant="bodyMedium" style={styles.size}>
                    M
                  </Text>
                  <View style={styles.priceContainer}>
                    <Text variant="bodyMedium" style={styles.dollar}>
                      $
                    </Text>
                    <Text variant="bodyMedium" style={styles.priceValue}>
                      3.15
                    </Text>
                  </View>
                </View>
                <View style={styles.buttonsRow}>
                  <Pressable onPress={decreaseQuantity} style={styles.button}>
                    <Text style={styles.buttonLabel}>-</Text>
                  </Pressable>
                  <View style={styles.numberContainer}>
                    <Text variant="bodyMedium" style={styles.number}>
                      {quantity}
                    </Text>
                  </View>
                  <Pressable onPress={increaseQuantity} style={styles.button}>
                    <Text style={styles.buttonLabel}>+</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Card>
        </View>
      </ScrollView>
      <View style={styles.priceColumn}>
        <View style={styles.priceTextColumn}>
          <Text variant="bodyMedium" style={styles.priceText}>
            Price:
          </Text>
          <View style={styles.priceContainer}>
            <Text variant="bodyMedium" style={styles.dollar}>
              $
            </Text>
            <Text variant="bodyMedium" style={styles.priceValue}>
              21.20
            </Text>
          </View>
        </View>
        <Pressable
          onPress={() => console.log("Pay clicked")}
          style={styles.payButton}
        >
          <Text style={styles.payButtonText}>Pay Now</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  cardsContainer: {
    paddingHorizontal: 10,
    paddingBottom: 100,
    marginTop: 40,
  },
  card: {
    marginBottom: 20,
    width: "95%",
    backgroundColor: "#11161a",
    borderRadius: 10,
    elevation: 1,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  cardCover: {
    width: "55%",
    height: 150,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  title: {
    color: "#FFF",
    marginBottom: 5,
    fontWeight: "bold",
  },
  description: {
    color: "#FFF",
    marginBottom: 5,
  },
  size: {
    color: "#FFF",
    marginRight: 70,
    fontWeight: "bold",
  },
  priceRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    fontWeight: "bold",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  dollar: {
    color: "#d9662d",
    fontWeight: "bold",
    fontSize: 18,
  },
  priceValue: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },
  buttonsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: "#d9662d",
    paddingVertical: 5,
    paddingHorizontal: 11,
    borderRadius: 13,
    height: 30,
    justifyContent: "center",
  },
  buttonLabel: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },

  numberContainer: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#d9662d",
    paddingHorizontal: 10,
  },
  number: {
    color: "white",
  },
  priceColumn: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingBottom: 20,
    backgroundColor: "#11161a", // Optional background color
  },
  priceTextColumn: {
    alignItems: "flex-start",
  },
  priceText: {
    color: "#888",
    marginTop: 10,
    marginBottom: 5,
    fontSize: 20,
    fontWeight: "bold",
  },
  priceValueText: {
    color: "#FFA500",
    marginBottom: 10,
    fontSize: 20,
  },
  payButton: {
    backgroundColor: "#d9662d",
    width: "50%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 10,
  },
  payButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default Cart;
