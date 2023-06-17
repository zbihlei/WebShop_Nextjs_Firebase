import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GoodsState {
  id: string | null;
  category: string | null;
  name: string | null;
  model: string | null;
  photo: string | null;
  description: string | null;
  price: number | null;
  basket: any[];
}

const initialState: GoodsState = {
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
  reducers: {
    setGoods(state, action: PayloadAction<GoodsState>) {
      const { id, category, name, model, photo, description, price } = action.payload;
      state.id = id;
      state.category = category;
      state.name = name;
      state.model = model;
      state.photo = photo;
      state.description = description;
      state.price = price;
    },
    addToBasket(state, action: PayloadAction<any>) {
      state.basket = [...state.basket, ...action.payload];
    },
    deleteFromBasket(state, action: PayloadAction<string>) {
      state.basket = state.basket.filter(item => item.id !== action.payload);
    },
    clearBasket(state) {
      state.basket = initialState.basket;
    }
  }
});

export const { setGoods, addToBasket, deleteFromBasket, clearBasket } = goodsSlice.actions;

export default goodsSlice.reducer;