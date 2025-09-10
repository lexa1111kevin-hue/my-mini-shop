import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basketSlice";

function loadFormlocalStorage() {
  try {
    const data = localStorage.getItem("basket");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function saveToLocalStorage(state) {
  try {
    localStorage.setItem("basket", JSON.stringify(state.basket));
  } catch {}
}

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
  preloadedState: {
    basket: loadFormlocalStorage(),
  },
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
