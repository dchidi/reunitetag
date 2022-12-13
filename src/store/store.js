import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./features/cart_slice";

export const store = configureStore({ reducer: { cart: CartReducer } });
