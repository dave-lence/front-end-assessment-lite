import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { ww } from "../../responsive";
import { Ionicons } from "@expo/vector-icons";

const DropDowns = ({title, description}) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <View style={{marginBottom:ww(10)}}>
      <View
        style={{
          borderTopColor:"#E1E5E9",
          borderBottomColor:"#E1E5E9",
          borderTopWidth:0.5,
          borderBottomWidth:0.5,
          height: ww(60),
          width: "100%",
          padding: ww(10),
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>{title}</Text>
        <TouchableOpacity
          style={{
            padding: ww(6),
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setShowDescription(!showDescription)}
        >
          <Ionicons name={showDescription ? "ios-chevron-up":"chevron-down"} size={ww(24)} color="black" />
        </TouchableOpacity>
      </View>

      {showDescription && (
        <View
          style={{
            backgroundColor: "#fff",
            width: "100%",
            padding: ww(15),
            marginTop:ww(5)
          }}
        >
          <Text>
            {description}
          </Text>
        </View>
      )}
    </View>
  );
};

export default DropDowns;
