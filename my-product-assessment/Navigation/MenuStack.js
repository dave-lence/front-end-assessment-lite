import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Menu from "../Screens/Menu";
import ProductScreen from "../Screens/ProductScreen";

const Stack = createStackNavigator();
const MenuNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        component={Menu}
        name="MenuScreen"
        options={{ title: "Menu" }}
      />
      <Stack.Screen name="ProductScreen" component={ProductScreen} options={{presentation:"modal", animationTypeForReplace:"pop"}} />
    </Stack.Navigator>
  );
};

export default MenuNavigator;
