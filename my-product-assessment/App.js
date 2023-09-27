import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import BottomTab from "./Navigation/BottomTab";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <BottomTab />
      <StatusBar style="auto" />
      </Provider>
    </NavigationContainer>
  );
}
