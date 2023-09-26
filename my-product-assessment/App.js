import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BottomTab from "./Navigation/BottomTab";
import { NavigationContainer } from "@react-navigation/native";


export default function App() {
  return (
    <NavigationContainer>
      <BottomTab />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
