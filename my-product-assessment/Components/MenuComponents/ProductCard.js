import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ww } from "../../responsive";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ productImage, productName, productPrice }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: ww(20),
        height: ww(250),
        width: ww(185),
        marginVertical: ww(20),
        marginHorizontal: ww(10),
        overflow: "hidden",
      }}
      activeOpacity={0.7}
      onPress={() => navigation.navigate("ProductScreen", {productImage, productName, productPrice})}
    >
      <Image
        source={productImage}
        style={{ width: "70%", height: "70%", alignSelf: "center" }}
      />

      <View
        style={{
          flexDirection: "row",
          gap: ww(10),
          alignItems: "center",
          marginTop: ww(10),
        }}
      >
        <Text style={{ fontWeight: "500", fontSize: ww(14), flex: 1 }}>
          {productName}
        </Text>
        <Text style={{ color: "#DB3C25", fontWeight: "500", fontSize: ww(14) }}>
          ${productPrice}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          width: "100%",
          padding: ww(8),
          borderRadius: ww(50),
          backgroundColor: "#DB3C25",
          alignItems: "center",
          marginTop: ww(10),
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
