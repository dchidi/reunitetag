import { useEffect } from "react";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  total: 0,
  details: [], // Array of objects
  phone: {}, // holds phone number that will be assigned to a tag if buy tag transaction is successful
  tagId: {}, // used for topUp units
};
const persistDataLocally = (state) => {
  window.localStorage.setItem(
    "reunitetag_cart",
    JSON.stringify({
      total: state.total,
      details: state.details,
      phone: state.phone,
      tagId: state.tagId,
    })
  );
};

const CartSlice = createSlice({
  name: "cart",
  initialState:
    JSON.parse(window.localStorage.getItem("reunitetag_cart")) || initialState,
  reducers: {
    addToCart: (state, action) => {
      let temp = {};
      // get item from array with same product_id
      const itemFound = {
        ...state.details.find(
          (item) => item.product_id === action.payload.product_id
        ),
      };
      // check if item exist and increment its quantity. If it does not exist, return the payload without incrementing quantity
      if (itemFound.product_id) {
        temp = { ...itemFound, qty: itemFound.qty + 1 };
      } else {
        temp = action.payload;
      }
      // fiter array to remove item found. This avoids having duplicate items and add the updated item details using destructuring
      state.details = [
        ...state.details.filter(
          (item) => item.product_id !== action.payload.product_id
        ),
        temp,
      ];
      state.total = state.details.length;

      if (action.payload.phone)
        state.phone = {
          phone: action.payload.phone,
          product_id: action.payload.product_id,
        };

      if (action.payload.tagId)
        state.tagId = {
          tagId: action.payload.tagId,
          product_id: action.payload.product_id,
        };

      // persist store data
      persistDataLocally(state);
    },
    removeFromCart: (state, action) => {
      state.details = [
        ...state.details.filter((item) => item.product_id !== action.payload),
      ];
      state.total = state.details.length;

      if (action.payload === state.phone.product_id) state.phone = {};
      if (action.payload === state.tagId.product_id) state.tagId = {};

      persistDataLocally(state);
    },
    updateCart: (state, action) => {
      state.details = state.details.map((item) => {
        if (item.product_id === action.payload.product_id) {
          return { ...item, ...action.payload };
        } else return item;
      });

      persistDataLocally(state);
    },
    clearCart: (state, action) => {
      state.total = 0;
      state.details = [];
      state.phone = {};
      state.tagId = {};
      persistDataLocally(state);
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateCart } =
  CartSlice.actions;

export default CartSlice.reducer;
