import { createSlice } from "@reduxjs/toolkit";

 const initialState ={
    id: null,
    category: null,
    name: null,
    model: null,
    photo: null,
    description: null,
    price: null,
    basket: []
};

const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers:{
        setGoods(state, action){
            state.id = action.payload.id;
            state.category = action.payload.category;
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
        },
        clearBasket(state){
            state.basket = initialState.basket
        }
    }
});

export const{setGoods, addToBasket, deleteFromBasket, clearBasket} = goodsSlice.actions;

export default goodsSlice.reducer;
