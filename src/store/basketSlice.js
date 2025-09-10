import { createSlice } from "@reduxjs/toolkit";

const basketSlise = createSlice({
  name: "basket", // название состояния
  initialState: [], // начальное состояние
  reducers: {
    addToBasket: (state, action) => {
      //проверяем есть ли товар в корзине
      const exists = state.find((item) => item.id === action.payload.id);
      if (exists) {
        // если товар уже есть увеличиваем count
        exists.count += 1;
      } else {
        // если товара нет , увеличиваем
        state.push({ ...action.payload, count: 1 });
      }
    },
  },
});

// экспорт актион для вызова в компонентах
export const { addToBasket } = basketSlise.actions;

// экспортируем reduser(подключаем в store)
export default basketSlise.reducer;
