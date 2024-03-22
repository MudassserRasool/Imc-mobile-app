import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import cartSlice from './slices/cartSlice';
import restaurantSlice from './slices/restaurantSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    restaurant: restaurantSlice,
    auth: authSlice,
  },
});
