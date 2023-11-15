
import { configureStore } from '@reduxjs/toolkit';
import useReducer  from '../reducers/useReducer';

export const Store=configureStore({
    reducer:useReducer,
  
    
  })