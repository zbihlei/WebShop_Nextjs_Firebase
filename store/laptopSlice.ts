
import { createSlice } from "@reduxjs/toolkit";


const initialState ={
   id: null,
   category: null,
   name: null,
   model: null,
   photo: null,
   description: null,
   price: null
};

const laptopSlice = createSlice({
   name: 'laptop',
   initialState,
   reducers:{
       setLaptop(state, action){
           state.id = action.payload.id;
           state.category = initialState.category;
           state.name = action.payload.name;
           state.model = action.payload.model;
           state.photo = action.payload.photo;
           state.description = action.payload.description;
           state.price = action.payload.price;
       }
   }
});

export const{setLaptop} = laptopSlice.actions;

export default laptopSlice.reducer;
