import { configureStore } from '@reduxjs/toolkit';
import phoneReducer from '../store/phoneSlice';
import  laptopReducer from '../store/laptopSlice';
import userReducer from '../store/userSlice';

const store = configureStore({
  reducer: {
           phone: phoneReducer,
           laptop: laptopReducer,
           user: userReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
