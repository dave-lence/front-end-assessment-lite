import { createSlice } from "@reduxjs/toolkit";
import { Alert } from "react-native";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {  
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      
    },
    incrementQuantity: (state, action) => {
       state.items = [...state.items, action.payload]
    },

    decrementQuantity: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      ); // checking if the clicked product is in th cart
      let newCart = [...state.items]; // a new instance of our cart because we should never manipulate the cart array itself
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        Alert.alert("Product does not exist in your cart");
      }
      state.items = newCart;
    },

    removeItem: (state, action) => {
      const removeItem = state.items.filter((item) => item.id !== action.payload);
      state.items = removeItem;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;
export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => (total += item.productPrice), 0);
export const selectCartItems = (state) => state.cart.items;
export const selectCartItemsWithId = (state, id) =>
  state.cart.items.filter((item) => item.id == id);
export default cartSlice.reducer;
