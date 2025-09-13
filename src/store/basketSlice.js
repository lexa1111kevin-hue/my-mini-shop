import { createSlice } from "@reduxjs/toolkit";

const basketSlise = createSlice({
  name: "basket",
  initialState: [],
  reducers: {
    addToBasket: (state, action) => {
      const exists = state.find((item) => item.id === action.payload.id);
      if (exists) {
        exists.count += 1;
      } else {
        state.push({ ...action.payload, count: 1 });
      }
    },
    removeFromBasket: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      if (index != -1) {
        if (state[index].count > 1) {
          state[index].count -= 1;
        } else {
          state.splice(index, 1);
        }
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlise.actions;

export default basketSlise.reducer;
