import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ww } from "../../responsive";
import { Ionicons, Octicons, Fontisto } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {  decrementQuantity, incrementQuantity,  removeItem, selectCartItems, selectCartItemsWithId } from "../../Redux/CartSlice";


const CartCard = ({ id, productImage, productName, productPrice}) => {



    const dispatch = useDispatch()
    const cart = useSelector((state) => selectCartItemsWithId(state, id))
    //const items = useSelector(selectCartItems)

    const handleIncrement = () => {
       dispatch(incrementQuantity({id}))
    }

   const handleDecrement = () => {
        dispatch(decrementQuantity({id}))
    }
    
      const removeItemFromCart = () => {
        dispatch(removeItem({id}))
      } 

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#E1E5E9",
        paddingBottom: ww(10),
        marginTop:ww(20)
      }}
      id={cart.id}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }} >
        {/* image */}
        <Image
          source={productImage}
          style={{ height: ww(120), width: ww(92) }}
        />

        {/* product name and price */}
        <View style={{ justifyContent: "space-between" }}>
          <Text style={{ fontSize: ww(14), fontWeight: "400" }}>
            {productName}
          </Text>
          <Text
            style={{
              fontSize: ww(14),
              fontWeight: "500",
              color: "#DB3C25",
              marginVertical: ww(15),
            }}
          >
            ${productPrice}
          </Text>
          <TouchableOpacity onPress={removeItemFromCart}>
            <Ionicons name="md-trash-bin-outline" size={ww(24)} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ alignItems: "center", justifyContent: "space-between" }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fff",
            width: ww(37),
            height: ww(37),
            borderRadius: 5,
          }}
          disabled={!cart.length}
          onPress={handleDecrement}
        >
          <Fontisto name="minus-a" size={ww(24)} color="black" />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: ww(14),
            fontWeight: "500",
            marginVertical: ww(10),
          }}
        >
          {cart.length}
        </Text>

        <TouchableOpacity
          style={{
            alignItems: "center",
            borderRadius: 5,
            justifyContent: "center",
            backgroundColor: "#fff",
            width: ww(37),
            height: ww(37),
          }}
          onPress={handleIncrement}
        >
          <Octicons name="plus" size={ww(24)} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartCard;
