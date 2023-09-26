import { View, Text,  TextInput } from "react-native";
import React from "react";
import Constants from "expo-constants";
import { ww } from "../responsive";
import { AntDesign } from '@expo/vector-icons';

const hello = () => {
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
          Home
        </Text>
      </View>

    
    </View>
  );
};

export default hello;
