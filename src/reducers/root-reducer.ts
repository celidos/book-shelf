import { combineReducers } from 'redux';
import { booksReceiver } from './data-loader-reducer';
import {filtersSetter} from "./filter-reducer";
export const rootReducer = combineReducers(
    {
        booksReceiver,
        filtersSetter,
        
    })