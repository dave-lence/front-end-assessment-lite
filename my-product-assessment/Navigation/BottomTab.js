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

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon:({focused, size, color}) => {
            let iconName
            if(route.name == "homeScreen"){
                iconName = focused ? "home-variant" : "home-variant-outline"
            } else if(route.name == "menuScreen"){
                iconName = focused ? "apps-box" : "apps"
            } else if (route.name == "cartScreen"){
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
        name="homeScreen"
        options={{ title: "Home" }}
      />
      <Tab.Screen
        component={Menu}
        name="menuScreen"
        options={{ title: "Menu" }}
      />
      <Tab.Screen
        component={Cart}
        name="cartScreen"
        options={{ title: "Cart" }}
      />
      <Tab.Screen
        component={Account}
        name="accountScreen"
        options={{ title: "Account" }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
