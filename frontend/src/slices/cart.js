import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice ( {
  name :'cart',
  initialState:{
    cart : []
  },
  reducers:{
    addProduct(state,action){
      const { product, count  } = action.payload;

      if(!product || !product._id){
        console.error('Invalid product:', product);
        return;
      }

      const index = state.cart.findIndex((c) => c.product._id === product._id)

      if(index !== -1){
        state.cart[index].count += count;
      }else{
        state.cart.push({product,count});
      }
    },

    increaseCount(state, action) {
      const { product_id, amount } = action.payload;
      const index = state.cart.findIndex((c) => c.product._id === product_id); // Find the correct index
      if (index !== -1) {
        state.cart[index].count += amount;
      }
    },
    decreaseCount(state, action) {
      const { product_id, amount } = action.payload;
      const index = state.cart.findIndex((c) => c.product._id === product_id); // Find the correct index
      if (index !== -1) {
        state.cart[index].count -= amount;

        if (state.cart[index].count < 1) {
          state.cart[index].count = 1; // Ensure count does not drop below 1
        }
      }
    },
    deleteProduct(state,action){
      // const { product_id} = action.payload;
      state.cart = state.cart.filter((c)=> c.product._id !== action.payload);
    }
  }
  


})

export const {addProduct, increaseCount, decreaseCount,deleteProduct} = cartSlice.actions;

export default cartSlice.reducer;