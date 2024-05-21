import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import store from "./redux/store";
import BottomNavbar from "./navigators/bottomNavbar";
import HomeStack from "./navigators/homeStack";
import ItemDetails from "./pages/itemDetails";
import Favorites from "./pages/favorites";
import firebaseConfiguration from "./firebaseConfig";
// import Cart from './components/Cart';
// import EmptyListAnimation from './components/EmptyListAnimation';

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Provider store={store}>
            <StatusBar style="light"></StatusBar>
            {/* <Payment></Payment> */}
            {/* <Favorites></Favorites> */}
            {/* <ItemDetails></ItemDetails> */}
            <BottomNavbar></BottomNavbar>
          </Provider>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
