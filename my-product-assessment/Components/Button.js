import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ww } from "../responsive";

const Button = ({title, backgroundColor, borderColor, textColor}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: ww(48),
        marginVertical:ww(10),
        backgroundColor:backgroundColor,
        borderWidth:1,
        borderColor:borderColor,
      }}
      activeOpacity={0.7}
    >
      <Text style={{ color: textColor, fontSize: ww(14), fontWeight: "500" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
