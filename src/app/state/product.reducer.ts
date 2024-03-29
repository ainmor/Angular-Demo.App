import {createReducer, on} from "@ngrx/store";
import {getProductsFail, getProductsSuccess} from "./product.actions";
import {Product} from "../models/Product.Interface";

export const productFeatureKey = 'product';

export interface ProductState {
  products: Product[],
  error?: string;
}


export const initialState: ProductState = {
  products: [],
  error: undefined
}

export const productReducer = createReducer<ProductState>(
  initialState,
  on(getProductsSuccess, (state, action) => ({
  ...state,
  products: action.response.products
  })),
  on(getProductsFail, (state, action) => ({
    ...state,
    error:action.error
  }))
);
