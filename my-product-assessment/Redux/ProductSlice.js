import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};


const productSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        getProducts:(state, action) => {
          state.items = productData.map((product) => {
            return product
          })
        }
    },
   
})

export default productSlice.reducer