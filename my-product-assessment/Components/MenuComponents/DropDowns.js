import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ww } from "../../responsive";
import { Ionicons } from "@expo/vector-icons";

const DropDowns = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#fff",
          height: ww(48),
          width: "100%",
          padding: ww(8),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>ingridients</Text>
        <TouchableOpacity
          style={{
            padding: ww(6),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="chevron-down" size={ww(24)} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DropDowns;
