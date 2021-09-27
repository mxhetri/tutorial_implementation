import {SELECTED_PRODUCT, SET_PRODUCTS} from "./FakeShopTypes";

export const setProducts = (products) => {
    return({
        type: SET_PRODUCTS,
        payload: products
    });
}

export const selectedProduct = (product) => {
    return({
        type: SELECTED_PRODUCT,
        payload: product
    })
}