import { configureStore } from '@reduxjs/toolkit'
import bannersReducer from './slice/banners';
import categoriesReducer from './slice/categories';
import productsReducer from './slice/products';

export const store = configureStore({
  reducer: {
      banners: bannersReducer.reducer,
      categories: categoriesReducer.reducer,
      products: productsReducer.reducer
  },
})

export default store;