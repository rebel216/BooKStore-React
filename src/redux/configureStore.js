import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import Categoriesreducer from './categories/categories';

const rootreducer = combineReducers({
  booksReducer, Categoriesreducer,
});

const store = configureStore({
  reducer: rootreducer,
});
export default store;
