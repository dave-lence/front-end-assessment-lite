import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ww } from "../../responsive";
import { EvilIcons } from "@expo/vector-icons";

const ProductCard = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: ww(10),
        height: ww(228),
        width: ww(155),
        marginVertical: ww(10),
        marginHorizontal: ww(20),
      }}
      activeOpacity={0.7}
    >
      <Image
        source={require("../../assets/beans4.png")}
        resizeMode="cover"
        style={{}}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: ww(14) }}>
          TITLE Of pro...
        </Text>
        <Text style={{ color: "#DB3C25", fontWeight: "500", fontSize: ww(14) }}>
          $30
        </Text>
      </View>

      <TouchableOpacity
        style={{
          width: "100%",
          padding: ww(8),
          borderRadius: ww(50),
          backgroundColor: "#DB3C25",
          alignItems: "center",
          marginTop: ww(15),
          flexDirection: "row",
          gap: 5,
          justifyContent: "center",
        }}
        activeOpacity={0.7}
      >
        <EvilIcons name="cart" size={ww(24)} color="#FFF" />
        <Text style={{ color: "#fff", fontSize: ww(12), fontWeight: "400" }}>
          Add to cart
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductCard;
