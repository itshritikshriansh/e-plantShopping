import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Adds a new plant to the cart
    addItem: (state, action) => {
      const newItem = action.payload; // Expecting an object with name, price, quantity, etc.
      const existingItem = state.items.find(item => item.name === newItem.name);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push({ ...newItem });
      }
    },

    // Removes an item from the cart by name
    removeItem: (state, action) => {
      const nameToRemove = action.payload;
      state.items = state.items.filter(item => item.name !== nameToRemove);
    },

    // Updates the quantity of a specific plant in the cart
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export action creators
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export reducer to use in store.js
export default CartSlice.reducer;