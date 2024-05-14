import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "../pages/home";
import Cart from "../pages/cart";
import Favorites from "../pages/favorites";
import Orders from "../pages/orders";
import HomeStack from "./homeStack";

const BottomNavbar = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Orders" component={Orders} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default BottomNavbar;
