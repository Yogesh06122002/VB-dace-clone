
import {configureStore} from "@reduxjs/toolkit"
import productSlice from '../slices/cart.js'

const store = configureStore({
  reducer : {

    cart : productSlice

  }
})

export default store;