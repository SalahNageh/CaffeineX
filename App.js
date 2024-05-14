import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-native-paper";
import store from "./redux/store";
import BottomNavbar from "./navigators/bottomNavbar";
import HomeStack from "./navigators/homeStack";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar style="light"></StatusBar>
        <BottomNavbar></BottomNavbar>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
