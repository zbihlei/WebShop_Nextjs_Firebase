import { configureStore } from '@reduxjs/toolkit';
import goodsReducer from './goodsSlice';
import userReducer from '../store/userSlice';

const store = configureStore({
  reducer: {
           goods: goodsReducer,
           user: userReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
