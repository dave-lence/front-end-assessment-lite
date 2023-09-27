import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Constants from "expo-constants";
import { ww } from "../responsive";
import { Ionicons, Octicons, Fontisto } from "@expo/vector-icons";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity, removeItem, selectCartItems, selectCartItemsWithId } from "../Redux/CartSlice";

//custm files
import DropDowns from "../Components/MenuComponents/DropDowns";
import { productInfoData } from "../productInformation";
import Button from "../Components/Button";


const ProductScreen = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems) 
  //const items = useSelector((state) => state.cart)

  const navigation = useNavigation();
  const [readMore, setReadMore] = useState(false);
  const {
    params: {id, productName, productPrice, productImage },
  } = useRoute();

  const [data, setData] = useState(productInfoData);

  const handleAddToCart = () => {
    dispatch(addToCart({id, productImage, productName, productPrice}))
  }

  const removeItemFromCart = () => {
    if(!items.length >=0) return;
    dispatch(removeItem({id}))
  }

  const handleDecrement = () => {
    dispatch(decrementQuantity({id}))
  }
 

    console.log(items)

 

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
            style={{
              marginTop: ww(10),
              fontSize: ww(14),
              fontWeight: "400",
              lineHeight: ww(16),
            }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look....
            {!readMore && (
              <Text
                style={{
                  color: "#DB3C25",
                  fontWeight: "500",
                  fontSize: ww(12),
                }}
                onPress={() => setReadMore(true)}
              >
                Read more
              </Text>
            )}
            {readMore &&
              `like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.... `}
            {readMore && (
              <Text
                style={{
                  color: "#DB3C25",
                  fontWeight: "500",
                  fontSize: ww(12),
                }}
                onPress={() => setReadMore(false)}
              >
                Close
              </Text>
            )}
          </Text>

          {/* drop downs */}
          <View style={{ marginTop: ww(92) }}>
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <DropDowns title={item.title} description={item.description} />
              )}
            />
          </View>

          {/* buttons */}
          <View style={{ marginTop: ww(40), marginBottom: ww(10) }}>
            {/* add and reduce button */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: ww(20)
              }}
            >
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  width: ww(48),
                  height: ww(48),
                  borderRadius:5,
                }}
                onPress={handleDecrement}
                disabled={!items.length}
              >
                <Fontisto name="minus-a" size={ww(24)} color={items.length > 0 ? "black" : "gray"} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  alignItems: "center",
                  borderRadius:5,
                  justifyContent: "center",
                  backgroundColor: "#fff",
                  width: ww(48),
                  height: ww(48),
                }}
                onPress={handleAddToCart}
              >
                <Octicons name="plus" size={ww(24)} color="black" />
              </TouchableOpacity>
            </View>

            <Button
              title={"Add to cart"}
              textColor={"#fff"}
              backgroundColor={"#DB3C25"}
              borderColor={"#DB3C25"}
              onPress={handleAddToCart}
            />
            <Button
              title={"Remove from cart"}
              textColor={"#DB3C25"}
              borderColor={"#DB3C25"}
              onPress={removeItemFromCart}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductScreen;
