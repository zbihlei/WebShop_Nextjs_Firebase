import { configureStore } from '@reduxjs/toolkit';
import phoneReducer from '../store/phoneSlice';
import userReducer from '../store/userSlice';

const store = configureStore({
  reducer: {
           phone: phoneReducer,
           user: userReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
