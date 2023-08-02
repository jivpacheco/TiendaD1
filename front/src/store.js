import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { productsReducer } from './reducer/productReducer';

const reducer = combineReducers({ 
    products: productsReducer //los productos van a ser los que encuentre en el reducer
});

let initialState={};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
// const store = create (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
// const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store


