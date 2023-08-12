import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import { productDetailsReducer, productsReducer } from './reducer/productReducer';

const reducer = combineReducers({ 
    productos: productsReducer, //los productos van a ser los que encuentre en el reducer
    productDetails: productDetailsReducer
    // productDetails: productDetailsReducer
});


let initialState={};

const middleware = [thunk];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
// const store = create (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));
// const store = createStore (reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store


