import { configureStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import booksReducer from './books/books';
import Categoriesreducer from './categories/categories';

const reducer = combineReducers({
  booksReducer, Categoriesreducer,
});

const store = configureStore(reducer, applyMiddleware(logger));

export default store;
