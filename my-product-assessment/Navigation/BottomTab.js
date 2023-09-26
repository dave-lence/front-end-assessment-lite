import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//custom files
import { ww } from "../responsive";
// screens
import Home from "../Screens/Home";
import Menu from "../Screens/Menu";
import Cart from "../Screens/Cart";
import Account from "../Screens/account";
import MenuNavigator from "./MenuStack";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon:({focused, size, color}) => {
            let iconName
            if(route.name == "HomeScreen"){
                iconName = focused ? "home-variant" : "home-variant-outline"
            } else if(route.name == "MenuScreen"){
                iconName = focused ? "apps-box" : "apps"
            } else if (route.name == "CartScreen"){
                iconName = focused ? "cart" : "cart-outline"
            } else {
                iconName = focused ? "account-circle" : "account-circle-outline"
            }

            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: "#DB3C25",
        tabBarInactiveTintColor: "gray",
        tabBarStyle:{padding:ww(10), paddingBottom:ww(10), height:ww(70)}
      })}
    >
      <Tab.Screen
        component={Home}
        name="HomeScreen"
        options={{ title: "Home" }}
      />
      <Tab.Screen
        component={MenuNavigator}
        name="MenuScreen"
        options={{ title: "Menu" }}
      />
      <Tab.Screen
        component={Cart}
        name="CartScreen"
        options={{ title: "Cart" }}
      />
      <Tab.Screen
        component={Account}
        name="AccountScreen"
        options={{ title: "Account" }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
