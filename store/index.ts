import { configureStore } from '@reduxjs/toolkit';
import phoneReducer from '../store/phoneSlice';

const store = configureStore({
  reducer: {
           phone: phoneReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
