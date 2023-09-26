import { View, Text, TextInput, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import { ww } from "../responsive";
import { AntDesign } from "@expo/vector-icons";

//custom files
import ProductCard from "../Components/MenuComponents/ProductCard";
import { productData } from "../appData";

const Menu = () => {
  const [products, setProducts] = useState(productData);
  const [refreshing, setRefreshing] = useState(false);

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
            borderWidth: 0.5,
            borderColor: "#858585",
          }}
        >
          <AntDesign name="search1" size={ww(24)} color="black" />
          <TextInput
            style={{ flex: 1 }}
            placeholder="Search"
            cursorColor={"black"}
          />
        </View>

        {/* product cards */}

        <FlatList
        style={{alignSelf:"center", marginBottom:ww(150)}}
          data={products}
          refreshing={refreshing}
          onRefresh={() => setProducts([
            {
              id: 5,
              price: 100.00,
              productName: "Vaserce Bag",
              img: require("../assets/beans7.png")
           },
          {
              id: 6,
              price: 10.00,
              productName: "Vaserce Bag",
              img: require("../assets/beans3.png")
           },
          {
              id: 7,
              price: 200.00,
              productName: "Vaserce Bag",
              img: require("../assets/burgitos.png")
           },
          {
              id: 8,
              price: 105.00,
              productName: "Vaserce Bag",
              img: require("../assets/beans6.png")
           },
            {
              id: 9,
              price: 100.00,
              productName: "Vaserce Bag",
              img: require("../assets/cart2.png")
           },
          {
              id: 10,
              price: 170.00,
              productName: "Vaserce Bag",
              img: require("../assets/product6.png")
           },
          {
              id: 11,
              price: 140.00,
              productName: "Vaserce Bag",
              img: require("../assets/product7.png")
           },
          {
              id: 12,
              price: 190.00,
              productName: "Vaserce Bag",
              img: require("../assets/product8.png")
           },
          ])}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductCard
              key={item.id}
              productPrice={item.price}
              productImage={item.img}
              productName={item.productName}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Menu;
