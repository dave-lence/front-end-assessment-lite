import { View, Text, ScrollView } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { ww } from "../responsive";
import Button from "../Components/Button";
import {useSelector } from "react-redux";
import { selectCartItems, selectCartItemsWithId, selectCartTotal } from "../Redux/CartSlice";

// custom files
import CartCard from "../Components/CartComponents/CartCard";


const Cart = () => {
  
  const cart = useSelector(selectCartItems)
  
  const cartTotal = useSelector(selectCartTotal)
  

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
          Cart
        </Text>
      </View>

      {/* cart cards */}
      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: ww(20) }}>
        {cart.map((item) => (
          <CartCard 
            key={item.id}
            id={item.id}
            productImage={item.productImage}
            productName={item.productName}
            productPrice={item.productPrice}
          />
        ))}
     

      {/* total price and checkout button */}
      <View style={{ marginTop: ww(100), marginBottom: ww(10), }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom:ww(10),
            justifyContent: "space-between",
          }}
        >
          <Text>Total({cart.length} items)</Text>
          <Text>${cartTotal}</Text>
        </View>

        {/* button */}
        <Button 
         title={`Check out - ${cartTotal}`}
         textColor={"#fff"}
         backgroundColor={"#DB3C25"}
         borderColor={"#DB3C25"}
        />
      </View>
      </ScrollView>
    </View>
  );
};

export default Cart;
