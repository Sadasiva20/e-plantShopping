import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload;
        const existing_Item = state.items.find(item_name => item_name.name === name);
        if (existing_Item) {
          existing_Item.quantity++;
        } else {
          state.items.push({ name, image, cost, quantity: 1 });
        }
      },
  
    removeItem: (state, action) => {

      state.items = state.items.filter(item_name => item_name.name !== action.payload);
        },
    updateQuantity: (state, action) => {

      const { name, quantity } = action.payload;
      const Update_item = state.items.find(item_name => item_name.name === name);
      if (Update_item) {
          Update_item.quantity = quantity;
}
     
    }
}});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

