import {createFeatureSelector, createSelector} from "@ngrx/store";
import {productFeatureKey, ProductState} from "./product.reducer";
import {Product} from "../models/Product.Interface";

export const getProductState = createFeatureSelector<ProductState>(productFeatureKey);

export const getProducts = createSelector(
  getProductState, (state: ProductState) => state.products
)
