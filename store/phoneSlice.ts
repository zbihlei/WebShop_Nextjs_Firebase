import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    id: null,
    name: null,
    model: null,
    photo: null,
    description: null,
    price: null,
    basket: []
};

const phoneSlice = createSlice({
    name: 'phone',
    initialState,
    reducers:{
        setPhone(state, action){
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.model = action.payload.model;
            state.photo = action.payload.photo;
            state.description = action.payload.description;
            state.price = action.payload.price;
        },
        addToBasket(state, action){
             state.basket = [...state.basket,...action.payload]
        },
        deleteFromBasket(state, action){
            state.basket = state.basket.filter(item => item.id !== action.payload);
        }
    }
});

export const{setPhone, addToBasket, deleteFromBasket} = phoneSlice.actions;

export default phoneSlice.reducer;