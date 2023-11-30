import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GoodsState {
  id: string | null;
  category: string | undefined;
  name: string | undefined;
  model: string | undefined;
  photo: string | undefined;
  description: string | undefined;
  price: number | null;
  basket: any[];
}

const initialState: GoodsState = {
  id: null,
  category: undefined,
  name: undefined,
  model: undefined,
  photo: undefined,
  description: undefined,
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