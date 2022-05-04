import { configureStore } from '@reduxjs/toolkit'
import bannersReducer from './slice/banners';
import categoriesReducer from './slice/categories';
import productsReducer from './slice/products';
import cartReducer from './slice/cart';

export const store = configureStore({
  reducer: {
      banners: bannersReducer.reducer,
      categories: categoriesReducer.reducer,
      products: productsReducer.reducer,
      cart: cartReducer.reducer
  },
})

export default store;