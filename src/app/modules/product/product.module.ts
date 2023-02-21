import {NgModule} from "@angular/core";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {ProductComponent} from "./product.component";
import {MatCardModule} from "@angular/material/card";
import {ProductRoutingModule} from "./product-routing.module";
import {ProductStateModule} from "../../state/product-state.module";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    NgOptimizedImage,
    ProductRoutingModule,
    ProductStateModule
  ],
  exports: [],
  declarations: [
    ProductComponent
  ]
})
export class ProductModule {}
