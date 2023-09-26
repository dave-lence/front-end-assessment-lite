import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import Constants from "expo-constants";
import { ww } from "../responsive";
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";

//custm files
import DropDowns from "../Components/MenuComponents/DropDowns";

const ProductScreen = () => {
  const navigation = useNavigation();
  const {
    params: { productName, productPrice, productImage },
  } = useRoute();

  const data = [
    {
      id: 1,
      text: "as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web p",
    },
    {
      id: 2,
      text: " 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: 3,
      text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old",
    },
    {
      id: 4,
      text: "as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web p",
    },
  ];

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
          paddingHorizontal: ww(20),
          marginVertical: ww(24),
          borderBottomWidth: 1,
          borderBottomColor: "#E1E5E9",
        }}
      >
        <TouchableOpacity
          style={{
            padding: ww(5),
            borderRadius: 8,
            justifyContent: "center",
            alignItems: "center",
            width: ww(40),
            height: ww(40),
            backgroundColor: "#FFF",
            marginBottom: ww(10),
          }}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* body */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ paddingHorizontal: ww(20), marginTop: ww(20) }}>
          {/* product image */}
          <View
            style={{
              width: "100%",
              backgroundColor: "#fff",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              height: ww(307),
            }}
          >
            <Image
              source={productImage}
              style={{ width: "50%", height: "80%" }}
            />
          </View>
          {/* title, description and price */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: ww(25),
            }}
          >
            {/* price and title */}
            <Text style={{ fontWeight: "500", fontSize: ww(16) }}>
              {productName}
            </Text>
            <Text
              style={{ color: "#DB3C25", fontWeight: "500", fontSize: ww(16) }}
            >
              {"$" + productPrice + ".00"}
            </Text>
          </View>
          {/* description */}
          <Text
            style={{ marginTop: ww(10), fontSize: ww(12), fontWeight: "500" }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy.
          </Text>

          {/* drop downs */}
          <View style={{ marginTop: ww(92) }}>
            {/* <FlatList
              data={data?.data}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <DropdownComponent key={item.id} data={item.text} />}
            /> */}
            <DropDowns/>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductScreen;
