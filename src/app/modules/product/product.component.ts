import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../models/Product.Interface";
import {Store} from "@ngrx/store";
import {getProductsAction} from "../../state/product.actions";
import {getProducts} from "../../state/product.selectors";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  products$: Observable<Product[]> | undefined;
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getProductsAction());
    this.products$ = this.store.select(getProducts);
  }

  ngOnDestroy() {

  }
}
