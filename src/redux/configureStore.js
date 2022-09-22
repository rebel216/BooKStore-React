import { configureStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import Categoriesreducer from './categories/categories';

const rootreducer = combineReducers({
  booksReducer, Categoriesreducer,
});

const store = configureStore(rootreducer, applyMiddleware(logger));

export default store;
