import {
    ALL_PRODUCTS_REQUEST, ALL_PRODUCTS_SUCCESS, ALL_PRODUCTS_FAIL,
    PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constants/productConstants";
// ALL PRODUCTS
export const productsReducer = (state = { productos: [] }, action) => {

    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:
            return {
                loading: true,
                productos: []
            }
        case ALL_PRODUCTS_SUCCESS: // con base a los tipoos que return del back
            return {
                loading: false,
                productos: action.payload.productos,
                cantidad: action.payload.cantidad
            }
        case ALL_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;

    }

}

// PRODUCTS DETAILS
export const productDetailsReducer = (state = { product: {}}, action) => {

    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case PRODUCT_DETAILS_SUCCESS: // con base a los tipoos que return del back
            return {
                loading: false,
                product: action.payload
                
            }
        case PRODUCT_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;

    }

}