import { View, Text,  TextInput } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { ww } from "../responsive";
import { AntDesign } from '@expo/vector-icons';
import ProductCard from "../Components/MenuComponents/ProductCard";


const Menu = () => {
  return (
    <View
      style={{
        marginTop: Constants.statusBarHeight,
        backgroundColor: "#F9F9F9",
        flex: 1,
      }}
    >
      {/* header */}
      <View
        style={{
          alignItems: "center",
          marginVertical: ww(24),
          borderBottomWidth: 1,
          borderBottomColor: "#E1E5E9",
        }}
      >
        <Text
          style={{ fontWeight: "500", marginBottom: ww(20), fontSize: ww(14) }}
        >
          Menu
        </Text>
      </View>

      <View style={{ paddingHorizontal: ww(20) }}>
        {/* search bar */}
        <View
          style={{
            padding: ww(10),
            borderRadius: 10,
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            borderWidth:0.5,
            borderColor:"#858585"
          }}
        >
          <AntDesign name="search1" size={ww(24)} color="black" />
          <TextInput style={{flex:1,}} placeholder="Search" cursorColor={"black"}/>
        </View>

        {/* product cards */}
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </View>
    </View>
  );
};



export default Menu