import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import deliveryReducer from '../features/deliveries/deliverySlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    deliveries: deliveryReducer
  },
});
