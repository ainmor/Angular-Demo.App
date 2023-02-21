import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HomeComponent} from "./home.component";
import {MatCardModule} from "@angular/material/card";
import {SharedModule} from "../shared/shared.module";
import {HomeRoutingModule} from "./home-routing.module";


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    SharedModule,
    HomeRoutingModule
  ],
  exports: [

  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {}
